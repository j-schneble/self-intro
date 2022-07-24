import { Container, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
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
      <Heading fontFamily='Baloo, sans-serif' as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid  columns={[1, 1, 2 ]} gap={6}>
      
 
  
        <Section >
     
          <WorkGridItem 
             
 id="inote"  thumbnail={thumbiNote} ><Heading variant="section-title" fontFamily='Baloo, sans-serif' className="top" fontWeight="600"  >iNote</Heading>
          <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'md'} className='description'>
            A MERN Stack notes application. Specficially built using ReactJS, MongoDB, Postman.
         </Text> </WorkGridItem>
       
        </Section>
        <Section>
        
          <WorkGridItem 
            id="3dwave "
           
            
            thumbnail= {thumbWave}
            
          ><Heading variant="section-title" fontFamily='Baloo, sans-serif' className="top" fontWeight="600" >3D wave</Heading>
          <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'md'}className='description'>
            A 3d Wave Ripple Animation using React, Three.js, and react-three-fiber
          </Text></WorkGridItem>
          
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="jacksforecast"
            thumbnail={thumbWeather}
           
          ><Heading variant="section-title" fontFamily='Baloo, sans-serif' className="top" fontWeight="600"  > Jack&apos;s Forecast</Heading>
          <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'md'} className='description'>
           A weather app using Nextjs, Tailwind, and the Current Weather data API from openweather.org.
         </Text> </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="ichat"
            thumbnail={thumbChat}
          
          >
          <Heading variant="section-title" fontFamily='Baloo, sans-serif' className="top" fontWeight="600"  >iChat</Heading>
          <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'md'} className='description'>
           The first version of iChat. A real time chat application. 
           </Text> </WorkGridItem>
      </Section>
      <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="ichatv2"
            thumbnail={thumbV2}
          
          >
          <Heading variant="section-title" fontFamily='Baloo, sans-serif' className="top" fontWeight="600"  >iChatv2</Heading>
          <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'md'} className='description'>
           The second version of iChat. A real time chat application, using Okta secure authentication. 
           </Text> </WorkGridItem>
      </Section>
      <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="textinspect"
            thumbnail={thumbText}
          
          >
          <Heading variant="section-title" fontFamily='Baloo, sans-serif' className="top" fontWeight="600"  >Jacks Text Inspect</Heading>
          <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'md'} className='description'>
          Learning animations with Framer Motion. Created an inspector that when hovered over text, the text enlarges and changes color.
           </Text> </WorkGridItem>
      </Section>
   
   
      </SimpleGrid>

     
 </Container>
  </Layout>
)

export default Builds
export { getServerSideProps } from '../components/chakra'