import Layout from '../../../components/layout'
import ContactForm from '../../../components/contact_form'
import { useRouter } from 'next/router'

export default function EditContact() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout title={`Edit contact #${id}`} >
      <ContactForm url={`/contacts/${id}`} method="PATCH" />
    </Layout>
  )
}
