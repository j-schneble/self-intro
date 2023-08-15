import React, { useEffect } from 'react';
import {
  Flex,
  useColorModeValue,
  chakra,
  Stack,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import content from '../../lib/aboutMe';
import styled from '@emotion/styled';
import Statement from '../Statement/index';

const StatusButton = styled(chakra.span)`
  height: 12px;
  width: 12px;
  border-radius: 999px;
`;

const AboutTerminal = () => {
  const [visibleIndex, setVisibleIndex] = React.useState(0);
  const [finished, setFinished] = React.useState(false);
  const { colorMode } = useColorMode();
  useEffect(() => {
    if (visibleIndex === content({ colorMode }).length) {
      setFinished(true);
    }
  }, [visibleIndex, colorMode]);
  return (
    <Flex className='terminal-shad term-mob' direction='column' minH='200px' width='full' maxW='2xl' mx='auto' mt={10}>
      <Flex
        width='full'
        position='relative'
        justifyContent='flex-start'
        alignItems='center'
        height='36px'
        className='term-top'
       
      >
        <Stack isInline ml={5}>
          <StatusButton className='term-red' />
          <StatusButton className='term-yellow' />
          <StatusButton className='term-green' />
        </Stack>
        <Flex
          mx={'auto'}
          height='36px'
          alignItems='center'
          width='full'
          position='absolute'
          justifyContent='center'
        >
          <Text>{finished ? 'Executed' : 'Executing'}: introduceSelf.js</Text>
        </Flex>
      </Flex>
      <Flex
        width='full'
        height='full'
        position='relative'

        overflow='hidden'
        bg={'transparent'}
      >
        <Flex

          width='full'
          height='full'
         className='terminal-back'
          position='absolute'
          top={0}
          left={0}
          zIndex='-6'
        ></Flex>
        <VStack width='full' spacing={3} alignItems='flex-start' p={5} direction='column'>
          {content({ colorMode }).map((statement, i) => {
            return (
              <Statement
                thisIndex={i}
                setVisibleIndex={setVisibleIndex}
                visibleIndex={visibleIndex}
                key={i.toString()}
                {...statement}
              />
            );
          })}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default AboutTerminal;