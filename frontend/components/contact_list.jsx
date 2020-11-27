import React from 'react';
import ContactListItem from './contact_list_item'
import { Alert, Row } from 'react-bootstrap'
import useSWR from 'swr'

const ContactList = ({name}) => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('http://localhost:3001/contacts', fetcher)
  if (error) return <Alert key='0' variant='danger'>Something wrong happen!</Alert>
  if (!data) return <Alert key='0' variant='info'>Loading...</Alert>

  return (
    data.map((props) => (
      <ContactListItem {...props} />
    ))
  )
};

export default ContactList;
