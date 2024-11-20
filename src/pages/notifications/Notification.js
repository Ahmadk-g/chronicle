import React from "react";
import { Card } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";





const Notification = (props) => {
  const {
    id,
    owner,
    notifier,
    notifier_name,
    notifier_id,
    notifier_image,
    notification_type,
    post,
    event,
    post_image,
    event_image,
    is_read,
    created_at
  } = props

   let message = "";
   if (notification_type === "like") {
     message = ` liked your post`;
   } else if (notification_type === "comment") {
     message = ` commented on your post`;
   } else if (notification_type === "interested") {
     message = ` is interested in your event`;
   } else if (notification_type === "attending") {
     message = ` is attending your event`;
   } else if (notification_type === "follow") {
     message = ` followed you`;
   }

   console.log(is_read)

return (
    <Card className="mb-2">
        <Card.Body>
          <div className="my-1 d-flex align-items-center">
            <div>
              <Link to={`/profiles/${notifier_id}`} className="align-self-center">
                  <Avatar src={notifier_image} height={55} />
                  <strong>{notifier_name}</strong>
              </Link>
            </div>
            <div className="mx-1">
              <span>{message}</span>
            </div>
            {/* <div>{message}</div> */}
            {post && (
              <div>
                <Link to={`/posts/${post}`} className="align-self-center mx-1">
                  <img src={post_image} alt="Post content" height={35} />
                </Link>
              </div>
            )}
            {event && (
              <div>
                <Link to={`/events/${event}`} className="align-self-center mx-1">
                  <img src={event_image} alt="Event content" height={35} />
                </Link>
              </div>
            )}
          </div>
          <div className="d-flex">
            <span className="ms-auto">{created_at}</span>
            {/* <span>{String(is_read)}</span> */}
          </div>
        </Card.Body>
    </Card>
    );
};   

export default Notification