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
    <Layout title="iChat">

      <Container>
     
        <Title>
          iChat
        </Title>
        <P>
          The first version of many chat apps called iChat. A real time chat application, with real communication and multiple rooms.
          
        </P>
        <P>
            After joining whichever chat room you choose,  you will be greeted by the real time chat bot.
        </P>
        <UnorderedList my={4}>
          <h2>◼️ add info</h2>
          <h2>◼️ add info</h2>
          
        </UnorderedList>
  
        <List ml={4} my={4}>
       
          <ListItem>
            <Meta>🔥 Stack</Meta>
            <span>Node.js, Socket.io, Express, and of course some beautiful styling with CSS.</span>
          </ListItem>

          <ListItem>
            <Meta>🔥 Source</Meta>
            <Link href="https://github.com/j-schneble/Chatroom-App">
              github.com/j-schneble/Chatroom-App <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
      
           
         
   
        <WorkImage src="/images/loginchat.png" alt="ichat" />
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/chatgreeting.png" alt="ichat" />
          <WorkImage src="/images/chatting.png" alt="ichat" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'