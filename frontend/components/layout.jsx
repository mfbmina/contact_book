import Head from 'next/head'
import { Container, Row } from 'react-bootstrap'

const Layout = ({title, children}) => {
  return (
    <Container fluid>
      <Head>
        <title>Contact book</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <Row><h1>{title}</h1></Row>
        <Row>{children}</Row>
      </Container>

      <footer className="cntr-footer">
        <p>
          © 2020 - Made with &hearts; by
          <a href="https://github.com/mfbmina" target="_blank" rel="noopener noreferrer">&nbsp;Matheus Mina</a>
        </p>
      </footer>
    </Container>
  )
}

export default Layout;
