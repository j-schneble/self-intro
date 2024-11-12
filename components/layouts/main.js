import Head from 'next/head'
import { Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (

    <Container as="main" >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jacks Homepage" />
        <meta name="author" content="Jacks Homepage" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <meta name="twitter:title" content="Jack Schneble" />

        <meta property="og:site_name" content="Jack Schneble" />
        <meta name="og:title" content="Jack Schneble" />
        <meta property="og:type" content="website" />
        <title>Jack Schneble - Homepage</title>
      </Head>
        {children}
    </Container>
  )
}

export default Main
