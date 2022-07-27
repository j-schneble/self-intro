import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import JsObjectLoader from '../js-object-loader'

const MyJsObject = dynamic(() => import('../js-object.js'), {
  ssr: false,
  loading: () => <JsObjectLoader />
})


const Main = ({ children, router }) => {
  return (
 
    <Box as="main" >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jacks Homepage" />
        <meta name="author" content="Jacks Homepage" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Jack Schneble" />
       
        <meta property="og:site_name" content="Jack Schneble" />
        <meta name="og:title" content="Jack Schneble" />
        <meta property="og:type" content="website" />
        
        
        <title>Jack Schneble - Homepage</title>
        
      </Head>
     
  
    
      

      <Container maxW="container.md"  >
        <MyJsObject />
       
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main