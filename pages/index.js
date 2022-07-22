import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  chakra, 
  Flex
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { FaLaptop, FaCode,  } from 'react-icons/fa'
import { BsLinkedin, BsFillPersonLinesFill,BsGithub } from 'react-icons/bs';
import Circle from './circle'

const Home = () => (
  <Layout>
    <Container>
    <Circle />
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Flex 
          alignItems="center" paddingBottom="4px" justifyContent="space-between">
           <Link href="https://linkedin.com">
            <BsLinkedin className="service-icon" style={{backgroundColor: "white", color:"#030099", borderRadius: "4px", border:"1.5px solid white", borderOpacity: "0.5", width: "1.7rem", height: "1.7rem", marginTop: "0.9rem", marginLeft: "0.7rem"}} />
          </Link>
              <Link href="">
                 <BsFillPersonLinesFill className="service-icon" style={{backgroundColor: "white", color:"black", borderRadius: "4px", border:"2px solid white", borderOpacity: "0.5", width: "1.7rem", height: "1.7rem", marginTop: "0.9rem" }}/>
              </Link>            
              <Link href="https://github.com/j-schneble" >
           <IoLogoGithub className="service-icon" style={{backgroundColor: "black", color:"white", borderRadius: "4px", border:"0.5px solid black", borderOpacity: "0.5", width: "1.7rem", height: "1.7rem", marginTop: "0.9rem", marginRight: "0.7rem" }} />
        </Link>             
        </Flex>
      </Box>      

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" paddingTop="12px" fontFamily='Baloo, sans-serif' fontWeight="400" letterSpacing="wider" variant="page-title">
            Jack Schneble
          </Heading>
          <p> A developer that believes in discovering the "why."</p>
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
              
            >➖ Design ➖  
            </h1>
            <FaLaptop className="item1"  />
              <h1 fontFamily='Baloo, sans-serif'
                  className="item"             
                 >
                  Design isn't just what a product looks like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.
              </h1>
              <h1 className="toptitle"
                >➖ Develop ➖
                <FaCode className="item1"/>            
              </h1>
               <h1 className="item">
                Constantly looking for a new way to understand and create, I am always working on new projects. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software. 
              </h1>  
            </div> 
          </Box>
        </Container>
    </Section>
  </Container>
</Layout>
)
export default Home
export { getServerSideProps } from '../components/chakra'