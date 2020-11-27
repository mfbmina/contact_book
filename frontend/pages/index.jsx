import { Alert, Button, Container, Row } from 'react-bootstrap'
import ContactList from '../components/contact_list'
import Layout from '../components/layout'
import useSWR from 'swr'
import Link from 'next/link'

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('http://localhost:3001/contacts', fetcher)

  return (
    <Layout>
      <Container>
        { error && <Alert key='0' variant='danger'>Something wrong happen!</Alert> }
        { !data && <Alert key='0' variant='info'>Loading...</Alert> }
        { data && !error && (
          <Row className="justify-content-md-between">
            <ContactList data={data}/>
          </Row>
        )}
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
