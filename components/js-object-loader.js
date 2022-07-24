import { forwardRef } from "react";
import { Box, Spinner } from '@chakra-ui/react';

 export const JsSpinner = () => (
    <Spinner
        size="sm"
        position="absolute"
       
        top="50%"
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
    mt={['-18px', '-60px', '-118px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
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

