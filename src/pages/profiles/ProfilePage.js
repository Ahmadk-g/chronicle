import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Asset from '../../components/Asset';

import styles from '../../styles/ProfilePage.module.css';
import appStyles from '../../App.module.css';
import btnStyles from '../../styles/Button.module.css';

import PopularProfiles from './PopularProfiles';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useParams } from 'react-router';
import { axiosReq } from '../../api/AxiosDefaults';
import {
  useProfileData,
  useSetProfileData,
} from '../../contexts/ProfileDataContext';
import { Button, Image } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../posts/Post';
import Event from '../events/Event';
import { fetchMoreData } from '../../utils/utils';
import NoResults from '../../assets/no-results.png';
import { ProfileEditDropdown } from '../../components/MoreDropdown';

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const [profileEvents, setProfileEvents] = useState({ results: [] });
  const [activeTab, setActiveTab] = useState('posts'); // show posts when landing on page

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: pageProfile },
          { data: profilePosts },
          { data: profileEvents },
        ] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/posts/?owner__profile=${id}`),
          axiosReq.get(`/events/?owner__profile=${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setProfileEvents(profileEvents);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.events_count}</div>
              <div>events</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.PurpleOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Purple}`}
                onClick={() => handleFollow(profile)}
              >
                follow
              </Button>
            ))}
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );

  const profileTabs = (
    <div className={`${styles.ProfileTabs} my-3 `}>
      <Button
        className={`${styles.Button} ${
          activeTab === 'posts' ? styles.ButtonActive : ''
        } mx-2`}
        onClick={() => setActiveTab('posts')}
      >
        <i className={`${styles.icon} fa-solid fa-stream`}></i>
        Posts
      </Button>
      <Button
        className={`${styles.Button} ${
          activeTab === 'events' ? styles.ButtonActive : ''
        } mx-2`}
        onClick={() => setActiveTab('events')}
      >
        <i className={`${styles.icon} fa-solid fa-calendar`}></i>
        Events
      </Button>
    </div>
  );

  const mainProfileContent =
    activeTab === 'posts' ? (
      <>
        <hr />
        {profilePosts.results.length ? (
          <InfiniteScroll
            children={profilePosts.results.map((post) => (
              <Post key={post.id} {...post} setPosts={setProfilePosts} />
            ))}
            dataLength={profilePosts.results.length}
            loader={<Asset spinner />}
            hasMore={!!profilePosts.next}
            next={() => fetchMoreData(profilePosts, setProfilePosts)}
          />
        ) : (
          <Asset
            src={NoResults}
            message={`No results found, ${profile?.owner} hasn't posted yet.`}
          />
        )}
      </>
    ) : (
      <>
        <hr />
        {profileEvents.results.length ? (
          <InfiniteScroll
            children={profileEvents.results.map((event) => (
              <Event key={event.id} {...event} setEvents={setProfileEvents} />
            ))}
            dataLength={profileEvents.results.length}
            loader={<Asset spinner />}
            hasMore={!!profileEvents.next}
            next={() => fetchMoreData(profileEvents, setProfileEvents)}
          />
        ) : (
          <Asset
            src={NoResults}
            message={`No results found, ${profile?.owner} hasn't created any events yet.`}
          />
        )}
      </>
    );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {profileTabs} {/* Add tabs for toggling */}
              {mainProfileContent}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
