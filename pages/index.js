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
import Circle from './circle'
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
    
 
      <Box marginTop="10px" display={{ md: 'flex' }}>
      
        <Box borderBottom="" flexGrow={1}>
        <Circle  />
          <Heading as="h1" paddingBottom="2px" fontFamily='Baloo, sans-serif' fontWeight="500" letterSpacing="widest"  variant="page-title">
        
            Jack Schneble
             
          </Heading>
         
          <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'md'} className="quote"> A developer that believes in discovering the &quot;why.&quot;</Text>
          
   
        </Box>
       
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >         
        </Box>
      </Box>

      <Section delay={0.1}>   
        <Container  mt={['5', '10']} mb={['5', '10']}
        >           
         <Box borderBottom="2px solid rgb(51, 52, 54)" borderTop="2px solid rgb(51, 52, 54)"> 
       
          <FaLaptop  className="itemicon" />
   
    
              <h1 fontFamily='Baloo, sans-serif'
                  className="item" 
                              
                 >
                  Design isn&apos;t just what a product looks like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.
              </h1>
              <FaCode className="itemicon" />
               <h1 className="item">
                Constantly looking for a new way to understand and create, I am always working on new projects. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software. 
              </h1>  
             
          </Box>
        </Container>
    </Section>
          <LanguageStackSection />
          <Divider my={7} />
          
    <Section delay={0.3}>
    <Heading
                as="h1"
                fontSize={{ base: "20px", md: "24px", lg: "28px" }}
                mb={3}
                fontFamily='Baloo, sans-serif'
                fontWeight="400"
                variant="section-title"

            >   
                In Progress
                    
            </Heading>
   

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            id="Facebook"
            
            thumbnail={thumbFb}
          ><h1 className="top">Recreating Facebook</h1>
            Recreating Facebook with real login
          </GridItem>
          <GridItem
            id="Site"
          
            thumbnail={thumbSite}
          >
          <h1 className="top">v2 Personal Site</h1>
            Creating another personal site
          </GridItem>
       </SimpleGrid>
       </Section>

  </Container>
</Layout>
)
export default Home
export { getServerSideProps } from '../components/chakra'