import { Container, Heading, SimpleGrid, Text, useColorModeValue, Box, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbiNote from '../public/images/merstack.png'
import thumbWeather from '../public/images/weather.png'
import thumbWave from '../public/images/electricwave.png'
import thumbChat from '../public/images/chat.png';
import thumbV2 from '../public/images/ichatv2.png'
import thumbText from '../public/images/textinspect.png'



const Builds = () => (
   
  <Layout 
  fontFamily='Baloo, sans-serif'
  title="Works"

   >
 
    <Container >

      <Heading   css={{ backdropFilter: 'blur(10px)' }} paddingLeft="1.3rem" paddingTop="0.5rem" paddingBottom=" 0.5rem " borderRadius="lg" maxWidth="15rem" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}  fontFamily='Baloo, sans-serif' as="h3" fontSize={25} letterSpacing="wider" fontWeight={500} mt={14} mb={5} variant="section-title">
        Personal Builds
      </Heading>
      <Divider my={4} />
      <Box className="buildstext">
     
   
      
     <h1 fontFamily='Baloo, sans-serif'
         className="itemitem" 
                  
        >
        
Design encompasses the internal functionality of a product as well as the overall user experience. I strive to develop interfaces and experiences that people can enjoy on all digital mediums.
     </h1>
     </Box>
    

      <SimpleGrid  columns={[1, 1, 2 ]} gap={6}>
      
 
  
        <Section >
     
          <WorkGridItem 
             
 id="inote" letterSpacing="wider" thumbnail={thumbiNote} ><Heading variant="section-title" fontFamily='Baloo, sans-serif' className="top" fontWeight="600"  >iNote</Heading>
          <Text  fontSize={'md'} className='buildsummary'>
            A MERN Stack notes application. Specficially built using ReactJS, MongoDB, Postman.
         </Text> </WorkGridItem>
       
        </Section>
        <Section>
        
          <WorkGridItem 
            id="3dwave "
           
            
            thumbnail= {thumbWave}
            
          ><Heading letterSpacing="wider" variant="section-title" fontFamily='Baloo, sans-serif' className="top" fontWeight="600" >3D wave</Heading>
          <Text  fontSize={'md'} className='buildsummary'>
            A 3d Wave Ripple Animation using React, Three.js, and react-three-fiber
          </Text></WorkGridItem>
          
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="jacksforecast"
            thumbnail={thumbWeather}
           
          ><Heading variant="section-title" letterSpacing="wider" fontFamily='Baloo, sans-serif' className="top" fontWeight="600"  > Jack&apos;s Forecast</Heading>
          <Text  fontSize={'md'} className='buildsummary'>
           A weather app using Nextjs, Tailwind, and the Current Weather data API from openweather.org.
         </Text> </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="ichat"
            thumbnail={thumbChat}
          
          >
          <Heading variant="section-title" letterSpacing="wider" fontFamily='Baloo, sans-serif' className="top" fontWeight="600"  >iChat</Heading>
          <Text  fontSize={'md'} className='buildsummary'>
           The first version of iChat. A real time chat application. 
           </Text> </WorkGridItem>
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