import { Container } from 'react-bootstrap'
import ContactList from '../../components/contact_list'
import ContactDetails from '../../components/contact_details'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'

export default function Details() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <Container>
        <ContactDetails id={id} />
      </Container>

      <Container>
        <ContactList url={`/contacts/${id}/histories`} />
      </Container>
    </Layout>
  )
}
