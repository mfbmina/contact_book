import {
  Alert, Button, Card, Col, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axiosOnSteroids from '../utils/axios';

const ContactDetails = ({ id }) => {
  const [contact, setContact] = useState({});
  const [alert, setAlert] = useState({});

  useEffect(() => {
    axiosOnSteroids({ url: `contacts/${id}`, method: 'GET' }).then((response) => {
      setContact(response.data);
      setAlert({});
    }).catch(() => {
      setAlert({
        ...alert,
        show: false,
        variant: 'danger',
        message: 'Something wrong happened!',
      });
    });
  }, []);

  const onClick = (event) => {
    event.preventDefault();
    axiosOnSteroids({ url: `contacts/${id}`, method: 'DELETE' }).then(() => {
      window.location = '/';
    }).catch(() => {
      setAlert({
        ...alert,
        show: true,
        variant: 'danger',
        message: 'Something went wrong!',
      });
    });
  };

  if (alert.show) {
    return (
      <Alert
        variant={alert.variant}
        onClose={() => setAlert({ ...alert, show: false })}
        dismissible
      >
        {alert.message}
      </Alert>
    );
  }
  return (
    <Card className="text-center" style={{ width: '100%', margin: '0 0 10px 0' }}>
      <Card.Header>Contact details</Card.Header>
      <Card.Body>
        <Card.Title>
          {contact.first_name}
          {' '}
          {contact.last_name}
        </Card.Title>
        <Card.Text>
          Email:
          {contact.email}
        </Card.Text>
        <Card.Text>
          Phone number:
          {contact.phone_number}
        </Card.Text>

        <Row>
          <Col><Button href={`/contacts/${id}/edit`} variant="primary" block>Edit</Button></Col>
          <Col><Button variant="danger" block onClick={onClick}>Delete</Button></Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-muted">
        Last update on
        {contact.updated_at}
      </Card.Footer>
    </Card>
  );
};

ContactDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ContactDetails;
