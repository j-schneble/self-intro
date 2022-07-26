import Link from 'next/link'

import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 19px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {


  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
         
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='SF-Pro-Display-Light'
            fontWeight="300"
         
            ml={1}
            mb={6}

          >
            JS Home
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo