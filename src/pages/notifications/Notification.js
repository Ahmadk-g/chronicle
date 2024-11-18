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
     message = `${notifier_name} liked your post`;
   } else if (notification_type === "comment") {
     message = `${notifier_name} commented on your post`;
   } else if (notification_type === "interested") {
     message = `${notifier_name} is interested in your event`;
   } else if (notification_type === "attending") {
     message = `${notifier_name} is attending your event`;
   } else if (notification_type === "follow") {
     message = `${notifier_name} followed you`;
   }

   console.log(is_read)

return (
    <Card className="mb-2">
        <Card.Body>
          <div className="d-flex align-items-center">
            <Link to={`/profiles/${notifier_id}`} className="me-3">
                <Avatar src={notifier_image} height={55} />
                <strong>{notifier}</strong>
            </Link>
            <div>
              <p>{message}</p>
            </div>
            {post && (
              <div>
                <Link to={`/posts/${post}`}>
                  <img src={post_image} alt="Post Image" height={35} />
                </Link>
              </div>
            )}
          </div>
          <div className="d-flex align-items-center">
            <span>{created_at}</span>
            <span>{String(is_read)}</span>
          </div>
        </Card.Body>
    </Card>
    );
};   

export default Notification