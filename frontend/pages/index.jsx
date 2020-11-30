import { Button } from 'react-bootstrap';
import Link from 'next/link';
import ContactList from '../components/contact_list';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout title="Contact book">
      <ContactList url="/contacts" />

      <Link href="/contacts/new">
        <Button variant="primary" block>Add new contact</Button>
      </Link>
    </Layout>
  );
}
