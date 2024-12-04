import React, { useState, useEffect, useCallback, useMemo } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../assets/logo.png';

import styles from '../styles/NavBar.module.css';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
  useCurrentUser,
  useSetCurrentUser,
} from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { removeTokenTimestamp } from '../utils/utils';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const history = useHistory();

  const [unreadNotifications, setUnreadNotifications] = useState(0); // State to store unread notification count

  const { pathname } = useLocation();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!currentUser) return;
      try {
        const { data } = await axios.get(`/notifications/`);

        const unreadCount = data.results.filter(
          (notifications) => !notifications.is_read
        ).length;
        setUnreadNotifications(unreadCount); // Update the unread notification count
      } catch (err) {
        // console.log(err);
      }
    };

    // Reset the unread notifications count when the user navigates to the notifications page
    if (pathname === '/notifications') {
      setUnreadNotifications(0); // Reset unread notifications to 0 immediately when on notifications page
    } else {
      // If not on the notifications page, just fetch notifications regularly
      fetchNotifications();
    }

    const timer = setTimeout(() => {
      fetchNotifications();
    }, 60000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentUser, pathname]);

  const NotificationBell = ({ unreadCount }) => (
    <NavLink
      className={`${styles.NavLink} ${unreadCount > 0 ? styles.HasUnread : ''}`}
      activeClassName={styles.Active}
      to="/notifications"
    >
      <div className={styles.BellContainer}>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Notifications</Tooltip>}
        >
          <i
            className={`fas fa-bell ${unreadCount > 0 ? styles.HasUnread : ''}`}
          />
        </OverlayTrigger>
        {unreadCount > 0 && (
          <span className={styles.NotificationCount}>{unreadCount}</span>
        )}
      </div>
      <span className={`${styles.NavBarText} d-inline d-md-none`}>
        Notifications
      </span>
    </NavLink>
  );

  const handleSignOut = useCallback(async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null);
      removeTokenTimestamp();
      history.push('/');
    } catch (err) {
      // console.log(err);
    }
  }, [setCurrentUser, history]);

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
            className={styles.DropdownItem}
            activeClassName={styles.DropdownItemActive}
            as={NavLink}
            to="/posts/create"
          >
            Add Post
          </Dropdown.Item>
          <Dropdown.Item
            className={`${styles.DropdownItem}`}
            activeClassName={styles.DropdownItemActive}
            as={NavLink}
            to="/events/create"
          >
            Add Event
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );

  const loggedInIcons = useMemo(
    () => (
      <>
        <NotificationBell unreadCount={unreadNotifications} />

        {/* Dropdown for Avatar */}
        <Dropdown>
          <Dropdown.Toggle
            as="div"
            id="dropdown-avatar"
            className={styles.AvatarToggle}
            data-testid="avatar-toggle" // for testing
            aria-label="Toggle avatar menu"
          >
            <Avatar
              src={currentUser?.profile_image}
              text={currentUser?.username}
              height={40}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              className={styles.NavLink}
              as={NavLink}
              to={`/profiles/${currentUser?.profile_id}`}
              activeClassName={styles.Active}
            >
              <i className="fas fa-user-circle"></i>
              <span className={`${styles.NavBarText} d-inline`}>
                My Profile
              </span>
            </Dropdown.Item>

            <Dropdown.Item
              className={styles.NavLink}
              as={NavLink}
              activeClassName={styles.Active}
              to="/feed"
            >
              <i className="fas fa-stream"></i>
              <span className={`${styles.NavBarText} d-inline`}>My Feed</span>
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.NavLink}
              as={NavLink}
              activeClassName={styles.Active}
              to="/liked"
            >
              <i className="fas fa-heart"></i>
              <span className={`${styles.NavBarText} d-inline`}>My Likes</span>
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.NavLink}
              as={NavLink}
              activeClassName={styles.Active}
              to="/myevents"
            >
              <i className="fas fa-calendar"></i>
              <span className={`${styles.NavBarText} d-inline`}>My Events</span>
            </Dropdown.Item>

            <Dropdown.Item
              className={styles.NavLink}
              onClick={handleSignOut}
              activeClassName={styles.Active}
            >
              <i className="fas fa-sign-out-alt"></i>
              <span className={`${styles.NavBarText} d-inline`}>Sign out</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    ),
    [currentUser, unreadNotifications, handleSignOut]
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
      <Container>
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
                <i className="fa-solid fa-calendar"></i>
              </OverlayTrigger>
              <span className={`${styles.NavBarText} d-inline d-md-none`}>
                Events
              </span>
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
              <span className={`${styles.NavBarText} d-inline d-md-none`}>
                Home
              </span>
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
