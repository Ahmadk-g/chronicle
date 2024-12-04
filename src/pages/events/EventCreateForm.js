import React, { useRef, useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';

import Asset from '../../components/Asset';

import Upload from '../../assets/upload.png';

import styles from '../../styles/PostEventCreateEditForm.module.css';
import appStyles from '../../App.module.css';
import btnStyles from '../../styles/Button.module.css';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/AxiosDefaults';
import { useRedirect } from '../../hooks/useRedirect';

function EventCreateForm() {
  useRedirect('loggedOut');
  const [errors, setErrors] = useState({});

  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    image: '',
    category: 'concert',
    event_date: '',
    start_time: '',
    end_time: '',
    location: '',
    ticket_price: 0.0,
  });
  const {
    title,
    description,
    image,
    category,
    event_date,
    start_time,
    end_time,
    location,
    ticket_price,
  } = eventData;

  const [categories, setCategories] = useState([]);
  const imageInput = useRef(null);
  const history = useHistory();

  useEffect(() => {
    // Fetch categories from the backend
    const fetchCategories = async () => {
      try {
        const response = await axiosReq.get('/category_choices/');
        setCategories(response.data);
      } catch (err) {
        // console.log("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [event.target.name]: null,
    }));
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setEventData({
        ...eventData,
        image: URL.createObjectURL(event.target.files[0]),
      });

      setErrors((prevErrors) => ({
        ...prevErrors,
        image: null,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('event_date', event_date);
    formData.append('start_time', start_time);
    formData.append('end_time', end_time);
    formData.append('location', location);
    formData.append('ticket_price', ticket_price);
    formData.append('image', imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post('/events/', formData);
      history.push(`/events/${data.id}`, { from: history.location.pathname });
    } catch (err) {
      //   console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Event Type</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={category}
          onChange={handleChange}
        >
          {categories.map((cat) => (
            <option key={cat[0]} value={cat[0]}>
              {cat[1].charAt(0).toUpperCase() + cat[1].slice(1)}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Event Date</Form.Label>
        <Form.Control
          type="date"
          name="event_date"
          value={event_date}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.event_date?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Start Time</Form.Label>
        <Form.Control
          type="time"
          name="start_time"
          value={start_time}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.start_time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>End Time</Form.Label>
        <Form.Control
          type="time"
          name="end_time"
          value={end_time}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.end_time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Ticket Price</Form.Label>
        <Form.Control
          type="number"
          name="ticket_price"
          value={ticket_price}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.ticket_price?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Bright}`}
        type="submit"
      >
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <div className="text-center mb-3">
            <h2 className="text-muted">Create Event</h2>
          </div>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Bright} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col
          md={5}
          lg={4}
          className={`${styles.DataForm} d-none d-md-block p-0 p-md-2`}
        >
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventCreateForm;
