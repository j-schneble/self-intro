

import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import DisplayButton from './display-button'


const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
      <NextLink href={href} passHref scroll={false}>
        <Link
          p={2}
          bg={active ? '#a0aec0' : undefined}
          color={active ? '#8352FD' : inactiveColor}
          target={target}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    )
  }
  
  const Navbar = props => {
    const { path } = props
  
    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={2}
        {...props}
      >
        <Container
          display="flex"
       
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          <Flex align="center" mr={10} >
            <Heading as="h1" size="xl" letterSpacing={'wider'}>
              <Logo />
            </Heading>
          </Flex>
  
        
  
          <Box flex={1} align="right">
            <DisplayButton />
  
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                <NextLink href="/" passHref>
                    <MenuItem as={Link}>About</MenuItem>
                  </NextLink>
                  <NextLink href="/builds" passHref>
                    <MenuItem as={Link}>Builds</MenuItem>
                  </NextLink>
                  <NextLink href="/contact" passHref>
                    <MenuItem as={Link}>Contact</MenuItem>
                  </NextLink>              
                 
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    )
  }
  
  export default Navbar