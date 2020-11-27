import { Alert, Button, Container, Form } from 'react-bootstrap'
import { useState } from 'react'
import axiosOnSteroids from '../utils/axios'

const ContactForm = ({url, method}) => {
  const [formData, setFormData] = useState({});
  const [alert, setAlert] = useState({});

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    setAlert({...alert, show: false})
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axiosOnSteroids({method, url,  data: formData}).then(function (response) {
      var message = (method === 'POST' ? 'Contact created!' : 'Contact updated!')
      setAlert({
        ...alert,
        variant: 'success',
        message: message
      });
    }).catch(function (error) {
      setAlert({
        ...alert,
        variant: 'danger',
        message: 'Something wrong happened!'
      });
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      { alert && <Alert key='0' variant={alert.variant}>{alert.message}</Alert> }
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="email" onChange={handleOnChange} />
      </Form.Group>
      <Form.Group controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="E.g: John" name="first_name" onChange={handleOnChange} />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="E.g: Doe" name="last_name" onChange={handleOnChange} />
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="text" placeholder="Normal text" name="phone_number" onChange={handleOnChange} />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </form>
  )
}

export default ContactForm;
