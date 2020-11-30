import { Alert, CardColumns } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './contact_list_item';
import axiosOnSteroids from '../utils/axios';

const ContactList = ({ url }) => {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState({});

  useEffect(() => {
    axiosOnSteroids({ url, method: 'GET' }).then((response) => {
      setContacts(response.data);
      setAlert({ ...alert, show: false });
    }).catch(() => {
      setAlert({
        ...alert,
        show: true,
        variant: 'danger',
        message: 'Something wrong happened!',
      });
    });
  }, []);

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
    <CardColumns>
      {contacts.map(({
        id,
        first_name,
        last_name,
        phone_number,
        email,
      }) => (
        <ContactListItem
          key={id}
          id={id}
          first_name={first_name}
          last_name={last_name}
          phone_number={phone_number}
          email={email}
        />
      ))}
    </CardColumns>
  );
};

ContactList.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ContactList;
