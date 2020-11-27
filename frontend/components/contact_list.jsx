import ContactListItem from './contact_list_item'

const ContactList = ({data}) => {
  return (
    data.map((props) => (
      <ContactListItem {...props} />
    ))
  )
};

export default ContactList;
