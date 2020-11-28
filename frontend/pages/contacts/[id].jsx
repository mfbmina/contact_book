import ContactList from '../../components/contact_list'
import ContactDetails from '../../components/contact_details'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'

export default function Details() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout title={`Details #${id}`} >
      <ContactDetails id={id} />

      <ContactList url={`/contacts/${id}/histories`} />
    </Layout>
  )
}
