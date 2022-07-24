import React from 'react';
import { Heading, SlideFade, Grid, useColorModeValue, Text } from "@chakra-ui/react";
import StackCard from '../components/StackCard';
import { languageStacks } from '../constant/index';

const LanguageStackSection = () => {
    return (
        <SlideFade in offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                fontSize={{ base: "20px", md: "24px", lg: "28px" }}
                mb={3}
                fontFamily='Baloo, sans-serif'
                fontWeight="400"
                variant="section-title"
            >
                Tech
            </Heading>
            <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'lg'}>Some of the tools and technologies I have been using on a regular basis.</Text>
            <Grid
                mt={5}
                templateColumns={["1fr", "repeat(2,1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={[2, 5, 5, 5]}
            >
                {languageStacks.map((stack) => (
                    <StackCard stack={stack} key={stack?.name} />
                ))}
            </Grid>
        </SlideFade>
    )
}

export default LanguageStackSection;