import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
 
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jacks Homepage" />
        <meta name="author" content="Jacks Homepage" />
        <meta name="author" content="Jack Schneble" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/images/js.png" type="image/x-icon" />     
        <meta property="og:site_name" content="Jack Schneble" />
        <meta name="og:title" content="Jack Schneble" />
        <meta property="og:type" content="website" />
  
        
        <title>Jack Schneble - Homepage</title>
        
      </Head>
      <body>
      
      
      </body>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
   
  )
}

export default Main