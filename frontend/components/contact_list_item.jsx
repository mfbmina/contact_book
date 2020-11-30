import { Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';

const ContactListItem = ({
  id, first_name, last_name, phone_number, email,
}) => (
  <Link href={`/contacts/${id}`}>
    <Card style={{ width: '18rem' }}>
      <Card.Header>
        {first_name}
        {' '}
        {last_name}
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          Email:
          {email}
        </ListGroup.Item>
        <ListGroup.Item>
          Phone number:
          {phone_number}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  </Link>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ContactListItem;
