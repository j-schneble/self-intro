import { forwardRef } from "react";
import { Box, Spinner } from '@chakra-ui/react';

 export const JsSpinner = () => (
    <Spinner
        size="sm"
        position="absolute"
       bottom="50%"
        top="25%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
        />
)


// eslint-disable-next-line react/display-name
export const JsContainer = forwardRef(({ children }, ref) => (

    <Box
    ref={ref}
    className="js-object"
    m="auto"
    mt={['-5px', '-15px', '-80px']}
    mb={['-40px', '-140px', '-200px']}
    w={[240, 440, 600]}
    h={[240, 440, 600]}
    position="relative"
  >
    {children}
  </Box>
))


const Loader = () => {
    return (
        <JsContainer>
            <JsSpinner />
        </JsContainer>
    )
}

export default Loader

