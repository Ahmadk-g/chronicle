import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { axiosReq } from "../../api/AxiosDefaults";
import Notification from "./Notification";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import PopularProfiles from "../profiles/PopularProfiles";

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
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <div className="text-center mb-3" >
          <h2>
            Notifications
          </h2>
        </div>
        <Container className={appStyles.Content} style={{maxWidth: "720px"}}>
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
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default NotificationsPage;
