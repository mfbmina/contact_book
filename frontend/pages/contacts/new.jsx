import Layout from '../../components/layout';
import ContactForm from '../../components/contact_form';

export default function NewContact() {
  return (
    <Layout title="New contact">
      <ContactForm url="/contacts" method="POST" />
    </Layout>
  );
}
