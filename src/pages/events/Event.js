import React, { useEffect, useState } from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Button, Card, Media, OverlayTrigger, Tooltip, Badge } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosReq, axiosRes } from "../../api/AxiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Event = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    attendance_id,
    interested_count,
    attending_count,
    title,
    description,
    image,
    event_date,
    start_time,
    end_time,
    ticket_price,
    category,
    location,
    updated_at,
    eventPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const [attendanceStatus, setAttendanceStatus] = useState(null);

  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/events/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (attendance_id) {
      const fetchStatus = async () => {
        try {
            const response = await axiosReq.get(`/attendings/${attendance_id}/`);
            setAttendanceStatus(response.data.status);
        } catch (err) {
            console.error("Error fetching attendance status", err);
        }
      };
      fetchStatus();
    }
  }, [attendance_id]);

    // Handle marking as "Interested"
    const handleInterested = async () => {
        try {
          if (attendanceStatus === "interested") {
            await axiosRes.delete(`/attendings/${attendance_id}/`);
            // Update the interested count and reset attendanceStatus
            setAttendanceStatus(null);
            props.setEvents(prevEvents => ({
              ...prevEvents,
              results: prevEvents.results.map(event => 
                event.id === id
                  ? { ...event, interested_count: event.interested_count - 1 }
                  : event
              ),
            }));

          } else {
            const {data} = await axiosRes.post(`/attendings/`, { event: id, status: 'interested' });
            // Update the interested count and set attendanceStatus
            setAttendanceStatus("interested");
            props.setEvents(prevEvents => ({
              ...prevEvents,
              results: prevEvents.results.map(event => 
                event.id === id
                  ? { ...event, interested_count: event.interested_count + 1, attendance_id: data.id }
                  : event
              ),
            }));
          }
        } catch (err) {
          console.error("Error handling interested status", err);
        }
      };
    
      // Handle marking as "Attending"
      const handleAttending = async () => {
        try {
          if (attendanceStatus === "attending") {
            await axiosRes.delete(`/attendings/${attendance_id}/`);
            // Update the attending count and reset attendanceStatus
            setAttendanceStatus(null);
            props.setEvents(prevEvents => ({
              ...prevEvents,
              results: prevEvents.results.map(event =>
                event.id === id
                  ? { ...event, attending_count: event.attending_count - 1 }
                  : event
              )
            }));
          } else {
            const {data} = await axiosRes.post(`/attendings/`, { event: id, status: 'attending' });
            // Update the attending count and set attendanceStatus
            setAttendanceStatus("attending");
            props.setEvents(prevEvents => ({
              ...prevEvents,
              results: prevEvents.results.map(event =>
                event.id === id
                  ? { ...event, attending_count: event.attending_count + 1, attendance_id: data.id }
                  : event
              )
            }));
          }
        } catch (err) {
          console.error("Error handling attending status", err);
        }
      };
    
      // Switch between Interested and Attending
      const handleSwitch = async (newStatus) => {
        if (attendanceStatus === "interested" && newStatus === "attending") {
          await axiosRes.delete(`/attendings/${attendance_id}/`);
          const {data} = await axiosRes.post(`/attendings/`, { event: id, status: "attending" });
          setAttendanceStatus("attending");
          props.setEvents(prevEvents => ({
            ...prevEvents,
            results: prevEvents.results.map(event =>
              event.id === id
                ? { ...event, interested_count: event.interested_count - 1, attending_count: event.attending_count + 1, attendance_id: data.id }
                : event
            )
          }));
        } else if (attendanceStatus === "attending" && newStatus === "interested") {
          await axiosRes.delete(`/attendings/${attendance_id}/`);
          const {data} = await axiosRes.post(`/attendings/`, { event: id, status: "interested" });
          setAttendanceStatus("interested");
          props.setEvents(prevEvents => ({
            ...prevEvents,
            results: prevEvents.results.map(event =>
              event.id === id
                ? { ...event, attending_count: event.attending_count - 1, interested_count: event.interested_count + 1, attendance_id: data.id }
                : event
            )
          }));
        }
      };

  return (
    <Card className={styles.Post}>
      <Card.Body className={styles.PostCardHeader}>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && eventPage && (
              <MoreDropdown 
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/events/${id}`}>
        <Card.Img
          src={image}
          alt={title}
          className={styles.EventImage}
        />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {location && <Card.Text><i class="fa-solid fa-location-dot"></i>{location}</Card.Text>}
        {description && <Card.Text>{description}</Card.Text>}
        <div className="d-flex justify-content-around">
          <div className={styles.TimeContainer}>
            Date
            <div className="d-flex">
              {event_date && <Card.Text className="ml-2">{event_date}</Card.Text>}
            </div>
            <div className="d-flex">
            {(start_time || end_time) && (
              <Card.Text className="ml-2">
                {start_time && `${start_time}`}
                {start_time && end_time && ' - '}
                {end_time && `${end_time}`}
              </Card.Text>
            )}
            </div>
          </div>
          <div>
            <Badge pill className={styles.BadgeEventCard}>
              {category && <Card.Text>{category}</Card.Text>}
            </Badge>{' '}
            {ticket_price && <Card.Text>{ticket_price}</Card.Text>}
          </div>
        </div>
        <div className="d-flex justify-content-end">
        {/* Interested Button */}
          <div className="d-flex">
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't mark your on own event as interested!</Tooltip>}
              >
                <Button className={styles.ButtonDisabled} variant="secondary" disabled>
                  Interested
                  <span style={{marginLeft: '10px'}}>{interested_count}</span>
                </Button>
              </OverlayTrigger>
            ) : attendance_id && attendanceStatus === "interested" ? (
              <Button className={`${styles.ButtonActive}`} onClick={handleInterested}>
                Interested
                <span style={{marginLeft: '10px'}}>{interested_count}</span>
              </Button>
            ) : attendance_id && attendanceStatus === "attending"? (
              <Button className={styles.ButtonOutline} onClick={() => handleSwitch("interested")}>
                Interested
                <span style={{marginLeft: '10px'}}>{interested_count}</span>
              </Button>
            ) : currentUser ? (
              <Button className={styles.ButtonOutline} onClick={handleInterested}>
                Interested
                <span style={{marginLeft: '10px'}}>{interested_count}</span>
              </Button>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to mark attendance!</Tooltip>}
              >
                <Button className={styles.ButtonOutline} onClick={() => {}}>
                  Interested
                  <span style={{marginLeft: '10px'}}>{interested_count}</span>
                </Button>
              </OverlayTrigger>
            )}
          </div>
          {/* Attending Button */}
          <div className="d-flex">
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't mark your on own event as attending!</Tooltip>}
              >
                <Button className={styles.ButtonDisabled} variant="secondary" disabled>
                  Attending
                  <span style={{marginLeft: '10px'}}>{attending_count}</span>
                </Button>
              </OverlayTrigger>
            ) : attendance_id && attendanceStatus === "attending"? (
              <Button className={styles.ButtonActive} onClick={handleAttending}>
                Attending
                <span style={{marginLeft: '10px'}}>{attending_count}</span>
              </Button>
            ) : attendance_id && attendanceStatus === "interested"? (
                  <Button className={styles.ButtonOutline} onClick={() => handleSwitch("attending")}>
                    Attending 
                    <span style={{marginLeft: '15px'}}>{attending_count}</span>
                  </Button>
            ) : currentUser ? (
              <Button className={styles.ButtonOutline} onClick={handleAttending}>
                Attending 
                <span style={{marginLeft: '15px'}}>{attending_count}</span>
              </Button>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to mark attendance!</Tooltip>}
              >
                <Button className={styles.ButtonOutline} onClick={() => {}}>
                  Attending
                  <span style={{marginLeft: '15px'}}>{attending_count}</span>
                </Button>
              </OverlayTrigger>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Event;