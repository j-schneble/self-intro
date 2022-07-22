import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbiNote from '../public/images/merstack.png'
import thumbWeather from '../public/images/weather.png'
import thumbWave from '../public/images/electricwave.png'
import thumbChat from '../public/images/chat.png';
import thumbV2 from '../public/images/ichatv2.png'
import thumbText from '../public/images/textinspect.png'
import Circle from './circle'


const Builds = () => (
   
  <Layout 
  fontFamily='Baloo, sans-serif'
  title="Works"

   >
   <Circle />
    <Container >
      <Heading fontFamily='Baloo, sans-serif' as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid  columns={[1, 1, 2 ]} gap={6}>
      
 
  
        <Section >
     
          <WorkGridItem 
             
 id="inote"  thumbnail={thumbiNote} ><h1 className="top" >iNote</h1>
          <div className='description'>
            A MERN Stack notes application. Specficially built using ReactJS, MongoDB, Postman.
         </div> </WorkGridItem>
       
        </Section>
        <Section>
        
          <WorkGridItem 
            id="3dwave "
           
            
            thumbnail= {thumbWave}
            
          ><h1 className="top" >3D wave</h1>
          <div className='description'>
            A 3d Wave Ripple Animation using React, Three.js, and react-three-fiber
          </div></WorkGridItem>
          
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="jacksforecast"
            thumbnail={thumbWeather}
           
          ><h1 className="top" > Jack&apos;s Forecast</h1>
          <div className='description'>
           A weather app using Nextjs, Tailwind, and the Current Weather data API from openweather.org.
         </div> </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="ichat"
            thumbnail={thumbChat}
          
          >
          <h1 className="top" >iChat</h1>
          <div className='description'>
           The first version of iChat. A real time chat application. 
           </div> </WorkGridItem>
      </Section>
      <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="ichatv2"
            thumbnail={thumbV2}
          
          >
          <h1 className="top" >iChatv2</h1>
          <div className='description'>
           The second version of iChat. A real time chat application, using Okta secure authentication. 
           </div> </WorkGridItem>
      </Section>
      <Section delay={0.1}>
          <WorkGridItem
          fontFamily='Baloo, sans-serif'
            id="textinspect"
            thumbnail={thumbText}
          
          >
          <h1 className="top" >Jacks Text Inspect</h1>
          <div className='description'>
          Learning animations with Framer Motion. Created an inspector that when hovered over text, the text enlarges and changes color.
           </div> </WorkGridItem>
      </Section>
   
   
      </SimpleGrid>

     
 </Container>
  </Layout>
)

export default Builds
export { getServerSideProps } from '../components/chakra'