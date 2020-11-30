import {
  Alert, Button, Row, Form, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axiosOnSteroids from '../utils/axios';

const ContactForm = ({ url, method }) => {
  const [formData, setFormData] = useState({});
  const [alert, setAlert] = useState({});

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    setAlert({ ...alert, show: false });
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosOnSteroids({ method, url, data: formData }).then(() => {
      const message = (method === 'POST' ? 'Contact created!' : 'Contact updated!');
      setAlert({
        ...alert,
        show: true,
        variant: 'success',
        message,
      });
    }).catch((error) => {
      const errorMessage = error.response.data.errors?.map((str) => (<p>{str}</p>));
      setAlert({
        ...alert,
        show: true,
        variant: 'danger',
        message: errorMessage || 'Something went wrong!',
      });
    });
  };

  return (
    <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
      { alert.show && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert({ ...alert, show: false })}
          dismissible
        >
          {alert.message}
        </Alert>
      )}
      <Form.Group as={Row} controlId="email">
        <Form.Label column sm="2">Email address</Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="name@example.com" name="email" onChange={handleOnChange} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="firstName">
        <Form.Label column sm="2">First name</Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="E.g: John" name="first_name" onChange={handleOnChange} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="lastName">
        <Form.Label column sm="2">Last name</Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="E.g: Doe" name="last_name" onChange={handleOnChange} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="phoneNumber">
        <Form.Label column sm="2">Phone number</Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Normal text" name="phone_number" onChange={handleOnChange} />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit" block>Submit</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default ContactForm;
