import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/AxiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);

      // Check if the user came from the edit page
      const previousPage = history.location.state?.from
      if (previousPage === `/posts/${id}/edit` || previousPage === `/posts/create`) {
        history.push("/")
      } else {
        history.goBack();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
        const { data } = await axiosRes.post('/likes/', { post: id });
        setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
                return post.id === id
                ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                : post;
            }),
        }));
    } catch (err) {
        // console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
        await axiosRes.delete(`/likes/${like_id}/`);
        setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
                return post.id === id
                ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                : post;
            }),
        }));
    } catch (err) {
        // console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={() => setShowDeleteModal(true)}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} className={styles.PostImage} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className={`far fa-heart ${styles.Disabled}`}/>
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className={`far fa-heart ${styles.Disabled}`} />
            </OverlayTrigger>
          )}
          {likes_count}
          {currentUser ? (
            <Link to={`/posts/${id}`}>
              <i className="far fa-comments" />
            </Link>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to comment on posts!</Tooltip>}
            >
              <i className={`far fa-comments ${styles.Disabled}`} />
            </OverlayTrigger>
          )}
          {comments_count}
        </div>
      </Card.Body>
      {/* Delete confirmation modal */}
      <DeleteConfirmationModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDelete}
      />
    </Card>
  );
};

export default Post;