import React, { useEffect, useState } from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Button, Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosReq } from "../../api/AxiosDefaults";

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
      axiosReq.get(`/api/attendings/${attendance_id}/`)
        .then(response => {
          setAttendanceStatus(response.data.status);
        })
        .catch(error => {
          console.error("Error fetching attendance status", error);
        });
    }
  }, [attendance_id]);

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
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        {event_date && <Card.Text>{event_date}</Card.Text>}
        {start_time && <Card.Text>{start_time}</Card.Text>}
        {end_time && <Card.Text>{end_time}</Card.Text>}
        {category && <Card.Text>{category}</Card.Text>}
        {ticket_price && <Card.Text>{ticket_price}</Card.Text>}
        {location && <Card.Text>{location}</Card.Text>}
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
            <Button className={styles.Button} onClick={() => {}}>
              Interested
            </Button>
          ) : currentUser ? (
            <Button className={styles.ButtonOutline}  onClick={() => {}}>
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
            <Button className={styles.Button} onClick={() => {}}>
              Attending
            </Button>
          ) : currentUser ? (
            <Button className={styles.ButtonOutline} onClick={() => {}}>
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