import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/AxiosDefaults";
import Notification from "./Notification";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";

function NotificationsPage() {
  const [notifications, setNotifications] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await axiosReq.get("/notifications/");
        setNotifications(data);

        // Mark notifications as read (Send PATCH request to update all notifications)
        await axiosReq.patch("/notifications/mark-all-as-read/");

        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchNotifications();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    
  }, []);

  return (
    <Container>
      {hasLoaded ? (
        <>
          {notifications.results.length ? (
            notifications.results.map((notification) => (
              <Notification key={notification.id} {...notification} setNotifications={setNotifications} />
            ))
          ) : (
            <p>No notifications found.</p>
          )}
        </>
      ) : (
        <Container className={appStyles.Content}>
          <Asset spinner />
        </Container>
      )}
    </Container>
  );
}

export default NotificationsPage;
