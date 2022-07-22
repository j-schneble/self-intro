import {
    Box,
    Container,
 
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/build'
  import P from '../../components/paragraph'


  const Work = () => (
    <Layout fontFamily='Baloo, sans-serif' title="inote">
  
      <Container>
     
        <Title fontFamily='Baloo, sans-serif' >
          inote
        </Title>
       
        <P fontFamily='Baloo, sans-serif' 
        textAlign="center"
        >
          The love of organization has lead me to trying all sorts of note taking apps, software and websites. 
          Wondering if I could make my own, I decided to create iNote. iNote is a notes application that stores all notes you create within your account, and also uses real time to keep track of note creation.
          
        </P>
  
        <UnorderedList my={4}>
          <h2>◼️ Stores your data for reoccuring use  </h2>
          <h2>◼️ Unlimited Note creation  </h2>
          
        </UnorderedList>
  
        <List ml={4} my={4}>
       
          <ListItem>
            <Meta>🔥 Stack </Meta>
            <span>MongoDB, JS, ReactJS, Nodejs Express, and of course some beautiful styling with CSS.</span>
          </ListItem>

          <ListItem>
            <Meta>🔥 Source </Meta>
            <Link href="https://github.com/craftzdog/caffe-ios-sample">
              github.com/j-schneble/Application-Project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <Box  align="center" my={6}>
     
            <Image className="projectbox"
            paddingBottom="2px"
              maxW={240}
              src="/images/merstack.png"
            
              alt="inote"
            />
            <div>

          
            <Image paddingTop="2px" className="projectbox"
              maxW={240}
              src="/images/noteregister.png"
            
              alt="inote"
            />
          </div>
        </Box>
        <WorkImage className="projectbox" src="/images/savednote.png" alt="inote" />
        <SimpleGrid columns={2} gap={2}>
          <WorkImage className="projectbox" src="/images/createnote.png" alt="inote" />
          <WorkImage className="projectbox" src="/images/notemain.png" alt="inote" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'