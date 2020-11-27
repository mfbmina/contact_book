import { Button, Container, Row } from 'react-bootstrap'
import ContactList from '../components/contact_list'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Container>
        <ContactList url='/contacts' />
      </Container>

      <Container>
        <Row>
          <Link href="/contacts/new">
            <Button variant="primary">Add new contact</Button>
          </Link>
        </Row>
      </Container>
    </Layout>
  )
}
