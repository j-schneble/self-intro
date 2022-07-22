import {
   
    Container,
  
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
  
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article.js'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta} from '../../components/build'
  import P from '../../components/paragraph.js'
  
  
  const Work = () => (
    <Layout fontFamily='Baloo, sans-serif' title="jacksforecast">
   
      <Container>
   
        <Title
        fontFamily='Baloo, sans-serif'>
          Jacks Forecast
        </Title>
        <P fontFamily='Baloo, sans-serif'>
         Jacks Forecast allows you to access current weather data for any location including over 200,000 cities. 
         While utilizing the Current Weather data API from https://openweather.org, 
         Jacks Forecast will collect and process weather data from different sources 
         such as global and local weather models, satellites, radars and a vast network of weather stations.
        </P>
        <P>
          So, you can check a shop info as soon as you found a promising ramen
          shop in a food magazine. Let&apos;s go out and have a delicious ramen!
        </P>
        <UnorderedList my={4}>
          <h2>◼️ Current weather info based on city</h2>
          <h2>◼️ Includes over 200,000 cities</h2>
          <h2>◼️ Beautiful UI and background theme switch</h2>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>web</span>
          </ListItem>
          <ListItem>
            <Meta>🔥 Stack</Meta>
            <span>Nextjs, Tailwind CSS, Current Weather data API</span>
          </ListItem>
          <ListItem>
            <Meta>🔥 Live</Meta>
            <Link href="https://jacks-forecast.vercel.app">
            {''} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>🔥 Source</Meta>
            <Link href="https://github.com/j-schneble/weather-forecast-app">
               {' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
      
  
        <WorkImage src="/images/weather.png" alt="jforecast" />
        <WorkImage src="/images/forecasttheme.png" alt="jforecast" />
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/miami.png" alt="jforecast" />
          <WorkImage src="/images/dubai.png" alt="jforecast" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra.js'