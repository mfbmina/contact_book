import { Card, ListGroup } from 'react-bootstrap'
import Link from 'next/link'

const ContactListItem = ({id, first_name, last_name, phone_number, email}) => {
  return (
    <Link href={`/contacts/${id}`}>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Header>{first_name} {last_name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Email: {email}</ListGroup.Item>
          <ListGroup.Item>Phone number: {phone_number}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Link>
  )
};

export default ContactListItem;
