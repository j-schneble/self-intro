import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Text,
  Divider
} from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import AboutTerminal from '../components/AboutTerminal/index.ts'

const Home = () => (

<Layout >
    <Container>
      <Box
        borderRadius="lg"
        textAlign="center"
       >    
        <Heading fontFamily="SF-Pro-Display-Bold" align="center" marginLeft="4rem" width="70%" borderBottom=" 0.5px solid " borderBottomColor="#969696"
        fontWeight="500" css={{ backdropFilter: 'blur(16px)' }} p={1} fontSize="4xl"> Jack Schneble   </Heading>    
      </Box>
        <Section delay={0.1}>   
          <Container >
            <Box 
              alignItems="center"
              maxW="container.md"
              textAlign="center"
              justify="space-between" 
              align="center"
              p={2}>
              <AboutTerminal />
            </Box>
          </Container>
            <Box 
              alignItems="center"
              maxW="container.md"
              textAlign="left"
              justify="space-between" 
              align="left"
              mt={10}> 
                <Text fontFamily="SF-Pro-Display-Light"  fontSize={'lg'}>
                  Constantly looking for a new way to understand and create, I am always working on 
                  new projects. Check out my {''} 
                    <NextLink href="https://www.github.com/j-schneble"  passHref scroll={false}>
                      <Link >Github. </Link> 
                    </NextLink>It&apos;s always updated .</Text> 
                  <SimpleGrid  columns={[1, 1, 2]} gap={8} mt={10} w={80} >    
       </SimpleGrid>
    </Box>           
    </Section>
    <Divider my={7} />
  </Container>
</Layout>
)
export default Home
export { getServerSideProps } from '../components/chakra'