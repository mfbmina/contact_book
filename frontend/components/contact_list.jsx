import { Alert, CardColumns } from 'react-bootstrap'
import ContactListItem from './contact_list_item'
import axiosOnSteroids from '../utils/axios'
import { useState, useEffect } from 'react'

const ContactList = ({url}) => {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState({});

  useEffect(() => {
    axiosOnSteroids({url, method: 'GET'}).then(function (response) {
      setContacts(response.data)
      setAlert({...alert, show: false });
    }).catch(function (error) {
      setAlert({
        ...alert,
        show: true,
        variant: 'danger',
        message: 'Something wrong happened!'
      });
    })
  }, [])

  if (alert.show) {
    return (<Alert variant={alert.variant} onClose={() => setAlert({...alert, show: false})} dismissible>{alert.message}</Alert>)
  } else {
    return (
      <CardColumns>
        {contacts.map((props, key) => (
          <ContactListItem {...props} key={key} />
        ))}
      </CardColumns>
    )
  }
};

export default ContactList;
