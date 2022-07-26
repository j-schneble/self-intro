

import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  chakra,
  Button,
  Text,
  useColorModeValue, 
  Flex,
  Divider
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { FaLaptop, FaCode,  } from 'react-icons/fa'
import { BsLinkedin, BsFillPersonLinesFill,BsGithub } from 'react-icons/bs';

import thumbFb from '../public/images/bg.png'
import thumbSite from '../public/images/bg.png'
import LanguageStackSection from '../components/LanguageStackSection'
import FrontendStackSection from '../components/FrontendStackSection'
import CssStackSection from '../components/CssStackSection'
import BackendStackSection from '../components/BackendStackSection'
import OtherStackSection from '../components/OtherStackSection'
import AboutTerminal from '../components/AboutTerminal/index.ts'
const Home = () => (
  <Layout>
    <Container>
    <Box
        borderRadius="lg"
        mb={12}
        p={1}
        textAlign="center"
        

      >
      
  <Heading fontFamily="SF-Pro-Display-Bold" align="center" marginLeft="4.35rem" width="70%" borderBottom=" 0.5px solid " borderBottomColor="#969696"
     fontWeight="500" css={{ backdropFilter: 'blur(16px)' }} p={1} fontSize="4xl"> Jack Schneble  <Text css={{ backdropFilter: 'blur(16px)' }} fontFamily="SF-Pro-Display" fontWeight="400" fontSize="large">St. Petersburg, Florida 📍</Text> </Heading> 
    
   </Box>
   
      <Section delay={0.1}>   
      <Container >
      <Box 
  alignItems="center"
          maxW="container.md"
       textAlign="center"
          justify="space-between" 
          align="center"
          mb={6}
        
          p={2}>
               <AboutTerminal />
      
          </Box>
 </Container>
                <Box 
 alignItems="center"
          maxW="container.md"
       textAlign="left"
          justify="space-between" 
          align="left"
          mt={10}> 
          
         
   
          <Heading
                as="h1"
                fontSize={{ base: "20px", md: "24px", lg: "28px" }}
                mb={6}
                fontFamily='SF-Pro-Display'
                fontWeight="400"
                variant="section-title"
              
            >
                 Current projects 
            </Heading>

            <Text fontFamily="SF-Pro-Display-Light"  fontSize={'lg'}>
                Constantly looking for a new way to understand and create, I am always working on 
                new projects. Check out my {''} 
                <NextLink href="https://www.github.com/j-schneble"  passHref scroll={false}>
            <Link >Github. </Link> 
            </NextLink>
             It&apos;s always updated .</Text> 
            <SimpleGrid  columns={[1, 1, 2]} gap={8} mt={10} w={80} >
        
          <GridItem
            id="Facebook"
            
            thumbnail={thumbFb}
          ><h1 fontFamily="SF-Pro-Display-Light" fontWeight="400">Recreating Netflix</h1>
            
          </GridItem>
          <GridItem 
            id="Site"
          
            thumbnail={thumbSite}
          >
          <h1 >Real Estate Site</h1>
           
          </GridItem>
          
       </SimpleGrid>
   
    </Box>
                
               
              
    </Section>
    <Divider my={7} />
          <LanguageStackSection />
          <Divider my={7} />
    

  </Container>

</Layout>
)
export default Home
export { getServerSideProps } from '../components/chakra'