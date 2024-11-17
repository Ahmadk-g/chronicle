import React, { useEffect, useState } from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Button, Card, Media, OverlayTrigger, Tooltip, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosReq, axiosRes } from "../../api/AxiosDefaults";

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

  const [attendanceStatus, setAttendanceStatus] = useState(null);

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
            props.setEvent(prevEvent => ({
              ...prevEvent,
              results: prevEvent.results.map(event => 
                event.id === id
                  ? { ...event, interested_count: event.interested_count - 1 }
                  : event
              ),
            }));

          } else {
            const {data} = await axiosRes.post(`/attendings/`, { event: id, status: 'interested' });
            // Update the interested count and set attendanceStatus
            setAttendanceStatus("interested");
            props.setEvent(prevEvent => ({
              ...prevEvent,
              results: prevEvent.results.map(event => 
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
            props.setEvent(prevEvent => ({
              ...prevEvent,
              results: prevEvent.results.map(event =>
                event.id === id
                  ? { ...event, attending_count: event.attending_count - 1 }
                  : event
              )
            }));
          } else {
            const {data} = await axiosRes.post(`/attendings/`, { event: id, status: 'attending' });
            // Update the attending count and set attendanceStatus
            setAttendanceStatus("attending");
            props.setEvent(prevEvent => ({
              ...prevEvent,
              results: prevEvent.results.map(event =>
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
          props.setEvent(prevEvent => ({
            ...prevEvent,
            results: prevEvent.results.map(event =>
              event.id === id
                ? { ...event, interested_count: event.interested_count - 1, attending_count: event.attending_count + 1, attendance_id: data.id }
                : event
            )
          }));
        } else if (attendanceStatus === "attending" && newStatus === "interested") {
          await axiosRes.delete(`/attendings/${attendance_id}/`);
          const {data} = await axiosRes.post(`/attendings/`, { event: id, status: "interested" });
          setAttendanceStatus("interested");
          props.setEvent(prevEvent => ({
            ...prevEvent,
            results: prevEvent.results.map(event =>
              event.id === id
                ? { ...event, attending_count: event.attending_count - 1, interested_count: event.interested_count + 1, attendance_id: data.id }
                : event
            )
          }));
        }
      };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && eventPage && "..."}
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
        {description && <Card.Text>{description}</Card.Text>}
        <div className="d-flex justify-content-between">
          <div className={styles.TimeContainer}>
            <div className="d-flex">
              <div>When:</div>
              {event_date && <Card.Text className="ml-2">{event_date}</Card.Text>}
            </div>
            <div className="d-flex">
              <div>Start:</div>
              {start_time && <Card.Text className="ml-3">{start_time}</Card.Text>}
            </div>
            <div className="d-flex">
              <div>End:</div>
              {end_time && <Card.Text className="ml-4">{end_time}</Card.Text>}
            </div>
          </div>
          <div>
            {location && <Card.Text>{location}</Card.Text>}
            <Badge pill variant="info">
              {category && <Card.Text>{category}</Card.Text>}
            </Badge>{' '}
            {ticket_price && <Card.Text>{ticket_price}</Card.Text>}
          </div>
        </div>
        <div className={styles.PostBar}>
        {/* Interested Button */}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't mark your on own event as interested!</Tooltip>}
            >
              <Button variant="secondary" disabled>
                Interested
              </Button>
            </OverlayTrigger>
          ) : attendance_id && attendanceStatus === "interested" ? (
            <Button className={styles.Button} onClick={handleInterested}>
              Interested
            </Button>
          ) : attendance_id && attendanceStatus === "attending"? (
            <Button onClick={() => handleSwitch("interested")}>
              Interested
            </Button>
          ) : currentUser ? (
            <Button className={styles.ButtonOutline}  onClick={handleInterested}>
              Interested
            </Button>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to mark attendance!</Tooltip>}
            >
              <Button variant="info" onClick={() => {}}>
                Interested
              </Button>
            </OverlayTrigger>
          )}
          {interested_count}
          {/* Attending Button */}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't mark your on own event as attending!</Tooltip>}
            >
              <Button variant="secondary" disabled>
                Attending
              </Button>
            </OverlayTrigger>
          ) : attendance_id && attendanceStatus === "attending"? (
            <Button className={styles.Button} onClick={handleAttending}>
              Attending
            </Button>
          ) : attendance_id && attendanceStatus === "interested"? (
                <Button onClick={() => handleSwitch("attending")}>
                  Attending
                </Button>
          ) : currentUser ? (
            <Button className={styles.ButtonOutline} onClick={handleAttending}>
              Attending
            </Button>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to mark attendance!</Tooltip>}
            >
              <Button variant="info" onClick={() => {}}>
                Attending
              </Button>
            </OverlayTrigger>
          )}
          {attending_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Event;