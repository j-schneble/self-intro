import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  chakra, 
  Flex
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { FaLaptop, FaCode,  } from 'react-icons/fa'
import { BsLinkedin, BsFillPersonLinesFill,BsGithub } from 'react-icons/bs';
import Circle from './circle'
import thumbFb from '../public/images/fb.png'
import thumbSite from '../public/images/site.png'

const Home = () => (
  <Layout>
    <Container>
    
 
      <Box marginBottom="10px" display={{ md: 'flex' }}>
      
        <Box borderBottom="1.9px solid rgb(51, 52, 54)" flexGrow={1}>
       
        <Circle  />
 
          <Heading as="h1" paddingBottom="2px" fontFamily='Baloo, sans-serif' fontWeight="500" letterSpacing="widest"  variant="page-title">
            Jack Schneble
             
          </Heading>
          
          <p className="quote"> A developer that believes in discovering the &quot;why.&quot;</p>
          
   
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
         <Box> 
          <div >  
            <h1
            fontFamily='Baloo, sans-serif'
            fontWeight="500"
            letterSpacing="wider"
            className="toptitle"
            variant="section-title"
            alignItems="left"
            display="flex"
            
            > ➖ Design  ➖   
            </h1>
    
              <h1 fontFamily='Baloo, sans-serif'
                  className="item" 
                              
                 >
                  Design isn&apos;t just what a product looks like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.
              </h1>
              <h1 className="toptitle"
                >➖ Develop ➖
                    
              </h1>
               <h1 className="item">
                Constantly looking for a new way to understand and create, I am always working on new projects. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software. 
              </h1>  
            </div> 
          </Box>
        </Container>
    </Section>
    <Section delay={0.3}>
        <Heading as="h3" fontFamily='Baloo, sans-serif' variant="section-title">
          Current builds
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