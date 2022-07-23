import React from 'react';
import { Heading, SlideFade, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import StackCard from '../components/StackCard';
import { frontendStacks } from '../constant/index';

const FrontendStackSection = () => {
    return (
        <SlideFade in offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                fontSize={{ base: "20px", md: "24px", lg: "28px" }}
                mb={3}
                fontFamily='Baloo, sans-serif'
            >
                Frontend
            </Heading>
            <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'lg'}>A list of my favorite tools and technologies that I use on a regular basis.</Text>
            <Grid
                mt={5}
                templateColumns={["1fr", "repeat(2,1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={[2, 5, 5, 5]}
            >
                {frontendStacks.map((stack) => (
                    <StackCard stack={stack} key={stack?.name} />
                ))}
            </Grid>
        </SlideFade>
    )
}

export default FrontendStackSection;