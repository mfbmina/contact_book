import Layout from '../../../components/layout'
import ContactForm from '../../../components/contact_form'
import { useRouter } from 'next/router'

export default function EditContact() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <ContactForm url={`/contacts/${id}`} method="PATCH" />
    </Layout>
  )
}
