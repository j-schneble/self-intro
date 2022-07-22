import {
 
    Container,
  
    Link,
    List,
    ListItem,
   
    UnorderedList,

  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/build'
  import P from '../../components/paragraph'
  
  
  const Work = () => (
    <Layout fontFamily='Baloo, sans-serif' title="3d Wave Animation">
   
      <Container>
    
        <Title fontFamily='Baloo, sans-serif'>
          3D Wave 
        </Title>
        <P fontFamily='Baloo, sans-serif' >
         I wanted work on my Three.js skills so i created a 3D wave using React, Three.js, and React-Three-Fiber.
        </P>
        <P>
          The wave moves with the cursor and will also stay symmetrical while you zoom in and out.
        </P>
        <UnorderedList my={4}>
          <h2>◼️ What I learned</h2>
          <h2>◼️ Math involved</h2>
          <h2>◼️ Talk about integration</h2>
        </UnorderedList>
  
        <List ml={4} my={4}>
         
          <ListItem>
            <Meta>🔥 Stack</Meta>
            <span>React, Three.js, and React-Three-Fiber</span>
          </ListItem>
          <ListItem>
            <Meta>🔥 Presentation</Meta>
            <Link href="https://vercel.com/j-schneble/3js">
              3D Wave Demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          
          <ListItem>
            <Meta>🔥 Source</Meta>
            <Link href="https://github.com/j-schneble/3js-Animation">
              github.com/j-schneble/3js-animation <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        
  
        <WorkImage src="/images/electricwave.png" alt="thumbwave" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'