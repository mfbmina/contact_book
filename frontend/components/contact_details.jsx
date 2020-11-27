import { Alert, Button, Card, Container, Row } from 'react-bootstrap'
import ContactListItem from './contact_list_item'
import axiosOnSteroids from '../utils/axios'
import { useState, useEffect } from 'react'

const ContactDetails = ({id}) => {
  const [contact, setContact] = useState({});
  const [alert, setAlert] = useState({});

  useEffect(() => {
    console.log(`contacts/${id}`)
    axiosOnSteroids({url: `contacts/${id}`, method: 'GET'}).then(function (response) {
      setContact(response.data)
      setAlert({})
    }).catch(function (error) {
      setAlert({
        ...alert,
        variant: 'danger',
        message: 'Something wrong happened!'
      });
    })
  }, [])

  return (
    <Container>
      {alert && <Alert variant={alert.variant}>{alert.message}</Alert>}

      <Card className="text-center">
        <Card.Header>Contact details</Card.Header>
        <Card.Body>
          <Card.Title>{contact.first_name} {contact.last_name}</Card.Title>
          <Card.Text>Email: {contact.email}</Card.Text>
          <Card.Text>Phone number: {contact.phone_number}</Card.Text>
          <Button variant="primary">Edit</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Last update on {contact.updated_at}</Card.Footer>
      </Card>
    </Container>
  )
};

export default ContactDetails;
