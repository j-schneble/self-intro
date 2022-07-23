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
    <Layout title="iChatv2">

      <Container>
     
        <Title>
          iChatv2
        </Title>
        <P>
          The second version of iChat includes more security instead of your basic login. 
          v2 consists of a main chat-room that all users access immediately upon entry, and may chat as an anonymous user. If you decided you no longer want to remain anonymous, 
          then you may login with Okta secure login authentication which you will then recive your own personal account on v2.
          
        </P>

        <UnorderedList my={4}>
          <h2>◼️ Okta Authentication</h2>
          <h2>◼️ Main real-time anonymous chatting</h2>
          
        </UnorderedList>
  
        <List ml={4} my={4}>
       
          <ListItem>
            <Meta>🔥 Stack</Meta>
            <span>Node.js, Socket.io, Express, React, and Okta Authentication </span>
          </ListItem>

          <ListItem>
            <Meta>🔥 Source</Meta>
            <Link href="https://github.com/j-schneble/Chatroom-App-v2-">
              github.com/j-schneble/Chatroom-App-v2- <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
      
           
         
   
        <WorkImage src="/images/ichatv2.png" alt="ichat" />
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/ichatanon.png" alt="ichat" />
          <WorkImage src="/images/ichatokta.png" alt="ichat" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'