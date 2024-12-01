import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import './api/AxiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import EventCreateForm from './pages/events/EventCreateForm';
import PostPage from './pages/posts/PostPage';
import EventPage from './pages/events/EventPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import PostsPage from './pages/posts/PostsPage';
import EventsPage from './pages/events/EventsPage';
import PostEditForm from './pages/posts/PostEditForm';
import EventEditForm from './pages/events/EventEditForm';
import NotificationsPage from './pages/notifications/NotificationsPage';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
        <Route
              exact
              path="/"
              render={() => (
                <PostsPage message="No results found. Adjust the search keyword." />
              )} 
            />
              <Route
                exact
                path="/feed"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or follow a user."
                    filter={`owner__followed__owner__profile=${profile_id}&`}
                  />
                )} 
              />
              <Route
                exact
                path="/liked"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or like a post."
                    filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                  />
                )} 
              />
              <Route
                exact
                path="/events"
                render={() => (
                  <EventsPage
                    message="No results found. Adjust the search keyword"
                  />
                )} 
              />
              <Route
                exact
                path="/myevents"
                render={() => (
                  <EventsPage
                    message="No events found. You did not mark any events."
                    filter={`attendings__owner__profile=${profile_id}&ordering=-attendings__created_at&`}
                  />
                )}
              />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/events/create" render={() => <EventCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/events/:id" render={() => <EventPage />} />
          <Route exact path="/posts/:id/edit" render ={() => <PostEditForm />} />
          <Route exact path="/events/:id/edit" render ={() => <EventEditForm />} />
          <Route exact path="/notifications" render ={() => <NotificationsPage />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
                exact
                path="/profiles/:id/edit/username"
                render={() => <UsernameForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit/password"
                render={() => <UserPasswordForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit"
                render={() => <ProfileEditForm />}
              />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;