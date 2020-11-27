import { Alert, Container, Row } from 'react-bootstrap'
import ContactListItem from './contact_list_item'
import axiosOnSteroids from '../utils/axios'
import { useState, useEffect } from 'react'

const ContactList = ({url}) => {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState({});

  useEffect(() => {
    axiosOnSteroids({url, method: 'GET'}).then(function (response) {
      setContacts(response.data)
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
      <Row>
        {contacts.map((props, key) => (
          <ContactListItem {...props} key={key} />
        ))}
      </Row>
    </Container>
  )
};

export default ContactList;
