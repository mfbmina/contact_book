import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import ContactForm from '../../../components/contact_form';

export default function EditContact() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title={`Edit contact #${id}`}>
      <ContactForm url={`/contacts/${id}`} method="PATCH" />
    </Layout>
  );
}
