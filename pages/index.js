

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

import thumbFb from '../public/images/fb.png'
import thumbSite from '../public/images/site.png'
import LanguageStackSection from '../components/LanguageStackSection'
import FrontendStackSection from '../components/FrontendStackSection'
import CssStackSection from '../components/CssStackSection'
import BackendStackSection from '../components/BackendStackSection'
import OtherStackSection from '../components/OtherStackSection'

const Home = () => (
  <Layout>
    <Container>
    <Box
        borderRadius="lg"
        mb={12}
        p={2}
        textAlign="center"
        

      >
  
     <Heading fontFamily="SF-Pro-Display" fontWeight="500" css={{ backdropFilter: 'blur(16px)' }} borderRadius="20px"  fontSize="larger" className="quote"> A developer that believes in discovering the &quot;why.&quot;</Heading>
   </Box>
   
      <Section delay={0.1}>   
   <Box mt={4} >

   
               <h1 className="item">
              
                Constantly looking for a new way to understand and create, I am always working on 
                new projects. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create 
                beautiful software. 
                <NextLink href="/builds" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} marginLeft="2" fontFamily="SF-Pro-Display-Light" h="1rem" p={3.5}>
           
            </Button>
          </NextLink>  </h1>  
              </Box>     
    </Section>
    <Divider my={4} />
          <LanguageStackSection />
          <Divider my={4} />
          
    <Section delay={0.3}>
    
 <Box 
 alignItems="center"
          maxW="container.md"
       textAlign="left"
          justify="space-between" 
          align="left"> 
          
        
   
          <Heading
                as="h1"
                fontSize={{ base: "20px", md: "24px", lg: "28px" }}
                mb={5}
                fontFamily='SF-Pro-Display'
                fontWeight="400"
                variant="section-title"
              
            >
                 Current projects
            </Heading>

            <Text fontFamily="SF-Pro-Display-Light"  fontSize={'lg'}>Always keep my {''}  
            <NextLink href="https://www.github.com/j-schneble"  passHref scroll={false}>
            <Link >Github </Link> 
            </NextLink>
            up to date</Text>
    
   
    </Box>
    








        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={10}>
        
          <GridItem
            id="Facebook"
            
            thumbnail={thumbFb}
          ><h1 className="top">Recreating Facebook</h1>
            
          </GridItem>
          <GridItem
            id="Site"
          
            thumbnail={thumbSite}
          >
          <h1 className="top">v2 Personal Site</h1>
           
          </GridItem>
       </SimpleGrid>

       </Section>

  </Container>
</Layout>
)
export default Home
export { getServerSideProps } from '../components/chakra'