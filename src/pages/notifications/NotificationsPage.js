import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { axiosReq } from "../../api/AxiosDefaults";
import Notification from "./Notification";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import PopularProfiles from "../profiles/PopularProfiles";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useRedirect } from "../../hooks/useRedirect";


function NotificationsPage() {
  useRedirect("loggedOut");
  const [notifications, setNotifications] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await axiosReq.get("/notifications/");
        setNotifications(data);

        // Mark notifications as read
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
          <h2 className="text-muted">Notifications</h2>
        </div>
        <Container className={appStyles.Content} style={{maxWidth: "720px"}}>
          {hasLoaded ? (
            <>
              {notifications.results.length ? (
                <InfiniteScroll
                  children={notifications.results.map((notification) => (
                    <Notification key={notification.id} {...notification} setNotifications={setNotifications} />
                  ))}
                  dataLength={notifications.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!notifications.next && notifications.results.length < 30}
                  next={() => fetchMoreData(notifications, setNotifications)}
                />
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
