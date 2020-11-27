import Head from 'next/head'
import { Container, Row } from 'react-bootstrap'

export default function Layout({children}) {

  return (
    <Container fluid>
      <Head>
        <title>Contact book</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <h1>Contact book</h1>
        <Container>
          {children}
        </Container>
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
