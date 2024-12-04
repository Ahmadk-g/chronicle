import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  CurrentUserProvider,
  SetCurrentUserContext,
} from '../../contexts/CurrentUserContext';

import NavBar from '../NavBar';
import axios from 'axios';
import { axiosReq, axiosRes } from '../../api/AxiosDefaults';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

jest.mock('axios');
jest.mock('../../api/AxiosDefaults', () => {
  const axiosReq = {
    interceptors: {
      request: {
        use: jest.fn(),
        eject: jest.fn(),
      },
    },
  };

  const axiosRes = {
    interceptors: {
      response: {
        use: jest.fn(),
        eject: jest.fn(),
      },
    },
  };

  return { axiosReq, axiosRes };
});

test('displays correct navigation links for logged-out users', () => {
  // Render the NavBar component with no user (logged out state)
  render(
    <Router>
      <CurrentUserProvider>
        <SetCurrentUserContext.Provider value={jest.fn()}>
          <NavBar />
        </SetCurrentUserContext.Provider>
      </CurrentUserProvider>
    </Router>
  );

  // Check that "Sign In" and "Sign Up" links are visible
  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  expect(screen.getByText(/Sign up/i)).toBeInTheDocument();

  // Check that other links (like "Home" or "Events") are also visible if applicable
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Events/i)).toBeInTheDocument();
});

describe('NavBar', () => {
  const renderNavBar = () => {
    render(
      <Router>
        <CurrentUserProvider>
          <SetCurrentUserContext.Provider value={jest.fn()}>
            <NavBar />
          </SetCurrentUserContext.Provider>
        </CurrentUserProvider>
      </Router>
    );
  };

  beforeEach(() => {
    axios.post.mockResolvedValue({});
    axios.get.mockResolvedValue({ data: null });
    axiosReq.interceptors.request.use.mockImplementation(
      (callback) => callback
    );
    axiosRes.interceptors.response.use.mockImplementation(
      (response) => response,
      (err) => Promise.reject(err)
    );
  });

  const mockCurrentUser = {
    username: 'testuser',
    profile_image: 'test-image-url.jpg',
    profile_id: 1,
  };

  test('toggles menu and displays logged-in user links', () => {
    // Mock currentUser to simulate a logged-in state
    jest.spyOn(React, 'useContext').mockImplementation((context) => {
      if (context === CurrentUserProvider) {
        return mockCurrentUser; // Provide the mocked currentUser
      }
      return null;
    });

    renderNavBar();

    // Check that the avatar dropdown is now visible
    const avatarToggle = screen.getByLabelText(/toggle avatar menu/i);
    fireEvent.click(avatarToggle);

    // Assert that logged-in menu items are displayed
    expect(screen.getByText(/my profile/i)).toBeInTheDocument();
    expect(screen.getByText(/my feed/i)).toBeInTheDocument();
    expect(screen.getByText(/my likes/i)).toBeInTheDocument();
    expect(screen.getByText(/my events/i)).toBeInTheDocument();
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
  });
});
