import React, { useRef, useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/AxiosDefaults";

function EventEditForm() {
  const [errors, setErrors] = useState({});

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    image: "",
    category: "concert",
    event_date: "",
    start_time: "",
    end_time: "",
    location: "",
    ticket_price: 0.00,
  });
  const { title, description, image, category, event_date, start_time, end_time, location, ticket_price } = eventData;

  const [categories, setCategories] = useState([]);
  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/events/${id}/`);
        const { title, description, image, category, event_date, start_time, end_time, location, ticket_price, is_owner } = data;

        // Convert event_date to the correct format for input type="date"
        const formattedEventDate = new Date(event_date).toISOString().split("T")[0]; // Convert to YYYY-MM-DD

        // Format ticket_price: remove "€" or set to 0 if "free"
        const formattedTicketPrice = ticket_price === "free" ? 0 : parseFloat(ticket_price.replace("€", ""));

        is_owner ? setEventData({ title, description, image, category, event_date: formattedEventDate, start_time, end_time, location, ticket_price: formattedTicketPrice }) : history.push("/");
        
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  useEffect(() => {
    // Fetch categories from the backend
    const fetchCategories = async () => {
      try {
        const response = await axiosReq.get("/category_choices/");
        setCategories(response.data);
      } catch (err) {
        console.log("Error fetching categories:", err);
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

    console.log("Form Data:", {
        title,
        description,
        category,
        event_date,
        start_time,
        end_time,
        location,
        ticket_price,
        image: imageInput.current.files[0]
      });

    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("event_date", event_date);
    formData.append("start_time", start_time);
    formData.append("end_time", end_time);
    formData.append("location", location);
    formData.append("ticket_price", ticket_price);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }


    try {
      await axiosReq.put(`/events/${id}/`, formData);
      history.push(`/events/${id}`, { from: history.location.pathname });
    } catch (err) {
    //   console.log(err);
      console.log("Error submitting form:", err); // Log the error response
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
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
                <figure>
                <Image className={appStyles.Image} src={image} rounded />
                </figure>
                <div>
                <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                    htmlFor="image-upload"
                >
                    Change the image
                </Form.Label>
                </div>

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
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventEditForm;