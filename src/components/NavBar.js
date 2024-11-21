import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from '../assets/logo.png';
import { OverlayTrigger, Tooltip, Dropdown } from "react-bootstrap";

import styles from '../styles/NavBar.module.css'
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";



const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);  // State to store unread notification count

  const { pathname } = useLocation();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!currentUser) return; 
      try {
        const { data } = await axios.get(`/notifications/`);  // Fetch unread notifications
        setNotifications(data.results);
        console.log("Fetched Notifications:", data.results);

        const unreadCount = data.results.filter(notifications => !notifications.is_read).length;
        console.log(unreadCount)
        setUnreadNotifications(unreadCount);  // Update the unread notification count
      } catch (err) {
        console.log(err);
      }
    };

    fetchNotifications();
    const timer = setTimeout(() => {
      fetchNotifications();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentUser, pathname]);
  

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <>
      <Dropdown className={styles.NavLink}>
        <Dropdown.Toggle 
          as="div" 
          id="dropdown-add" 
          className={`${styles.PlusToggle} no-caret`} 
          bsPrefix="custom-toggle"
        >
          <i className="far fa-plus-square"></i> 
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            as={NavLink}
            to="/posts/create"
            >
            Add Post
          </Dropdown.Item>
          <Dropdown.Item 
            as={NavLink}
            to="/events/create"
          >
            Add Event
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/posts/create"
      >
        <i className="far fa-plus-square"></i>Add post
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/events/create"
      >
        <i className="far fa-plus-square"></i>Add Event
    </NavLink> */}
  </>
  );


  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Feed</Tooltip>}
        >
          <i className="fas fa-stream"></i>
        </OverlayTrigger>
        
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Liked Posts</Tooltip>}
        >
           <i className="fas fa-heart"></i>
        </OverlayTrigger>
      </NavLink>
      <NavLink
        className={`${styles.NavLink} ${unreadNotifications > 0 ? styles.HasUnread : ""}`}
        activeClassName={styles.Active}
        to="/notifications"
      >
        <div className={styles.BellContainer}>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>Notifications</Tooltip>}
          >
            <i className={`fas fa-bell ${unreadNotifications > 0 ? styles.HasUnread : ""}`} />
          </OverlayTrigger>
          {unreadNotifications > 0 && (
            <span className={styles.NotificationCount}>{unreadNotifications}</span>
          )}
        </div>
      </NavLink>
      {/* <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text={currentUser?.username} height={40} />
      </NavLink> */}
      {/* Dropdown for Avatar */}
      <Dropdown>
        <Dropdown.Toggle as="div" id="dropdown-avatar" className={styles.AvatarToggle}>
          <Avatar src={currentUser?.profile_image} text={currentUser?.username} height={40} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={NavLink} to={`/profiles/${currentUser?.profile_id}`}>
            Profile
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <NavLink to="/">
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
      </NavLink>
      {currentUser && addPostIcon}
      <Navbar.Toggle
        ref={ref}
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-left">
          <NavLink
            exact
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/events"
          >
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Events</Tooltip>}
            >
              <i class="fa-solid fa-calendar"></i>
            </OverlayTrigger>
          </NavLink>
          <NavLink
            exact
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/"
          >
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Home</Tooltip>}
            >
              <i className="fas fa-home"></i>
            </OverlayTrigger>
            
          </NavLink>
        </Nav>
        {currentUser ? loggedInIcons : loggedOutIcons}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;