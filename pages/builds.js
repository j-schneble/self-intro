import { Container, Heading, SimpleGrid, Text, useColorModeValue, Box, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbiNote from '../public/images/final.png'
import thumbWeather from '../public/images/final2.png'
import thumbWave from '../public/images/thumb2.png'
import thumbChat from '../public/images/final3.png';
import thumbV2 from '../public/images/final4.png'
import thumbText from '../public/images/textinspect.png'



const Builds = () => (
   
  <Layout 
  fontFamily='SF-Pro-Display'
  title="Works"

   >
 
    <Container >

      <Heading   css={{ backdropFilter: 'blur(14px)' }} borderBottom="1.5px solid white" paddingLeft="1.3rem" paddingTop="0.5rem" paddingBottom=" 0.5rem "  maxWidth="15rem"   fontFamily='SF-Pro-Display' fontSize={25} letterSpacing="wider" fontWeight={500} mt={14} mb={5} >
        Personal Builds
      </Heading>
      <Divider my={6} />
      <Box 
      align="center"
      mb={12}
      mt={8}
      >
     
   
      
     <h1 fontFamily='SF-Pro-Display-Light'
     
       
                  
        >
        
Design encompasses the internal functionality of a product as well as the overall user experience. I strive to develop interfaces and experiences that people can enjoy on all digital mediums.
     </h1>
     </Box>
    

      <SimpleGrid  columns={[1, 1, 2 ]} gap={6}>
      
 
  
        <Section >
     
          <WorkGridItem 
             fontFamily='SF-Pro-Display'
 id="inote"  

  thumbnail={thumbiNote} ><Heading  fontFamily='SF-Pro-Display' className="top" fontSize="md" fontWeight="400" letterSpacing="wider"  > A note application to create then store any ideas or information you choose.</Heading>
           </WorkGridItem>
       
        </Section>
        <Section>
        
          <WorkGridItem 
            id="3dwave "
            fontFamily='SF-Pro-Display'
            
            thumbnail= {thumbWave}
            
          ><Heading fontFamily='SF-Pro-Display' className="top" fontSize="md" fontWeight="400" letterSpacing="wider" >A 3D interactive space wave.</Heading>
          </WorkGridItem>
          
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
          fontFamily='SF-Pro-Display'
            id="jacksforecast"
            thumbnail={thumbWeather}
            border="2px solid white"
           
          ><Heading fontFamily='SF-Pro-Display' className="top" fontSize="md" fontWeight="500" letterSpacing="wider"  > A weather application to check current weather data for any location.  </Heading>
           </WorkGridItem>
        </Section>

        <Section  delay={0.1}>
        <Box
       
        borderRadius="15px"
        className="grad"
            border="4px solid #bb00ff"
            p={2}>
          <WorkGridItem
          fontFamily='SF-Pro-Display'
            id="ichat"
            thumbnail={thumbChat}
          
          >
          <Heading fontFamily='SF-Pro-Display' className="top" fontSize="md" fontWeight="400" letterSpacing="widest">The first version of a real time chat application.</Heading>
           </WorkGridItem>
           </Box>
      </Section>

      <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="ichatv2"
            thumbnail={thumbV2}
          
          >
          <Heading variant="section-title" letterSpacing="wider" fontFamily='Baloo, sans-serif' className="top" fontWeight="600"  >iChatv2</Heading>
          <Text  fontSize={'md'} className='buildsummary'>
           The second version of iChat. A real time chat application, using Okta secure authentication. 
           </Text> </WorkGridItem>
      </Section>
      <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="textinspect"
            thumbnail={thumbText}
          
          >
          <Heading variant="section-title" letterSpacing="wider" fontFamily='Baloo, sans-serif' className="top" fontWeight="600"  >Jacks Text Inspect</Heading>
          <Text  fontSize={'md'} className='buildsummary'>
          Learning animations with Framer Motion. Created an inspector that when hovered over text, the text enlarges and changes color.
           </Text> </WorkGridItem>
      </Section>
   
   
      </SimpleGrid>

     
 </Container>
  </Layout>
)

export default Builds
export { getServerSideProps } from '../components/chakra'