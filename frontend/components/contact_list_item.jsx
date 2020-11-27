import { Card, ListGroup } from 'react-bootstrap'

const ContactListItem = ({first_name, last_name, phone_number, email}) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Header>{first_name} {last_name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Email: {email}</ListGroup.Item>
        <ListGroup.Item>Phone number: {phone_number}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
};

export default ContactListItem;
