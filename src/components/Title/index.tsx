import { Flex, Heading } from "@chakra-ui/react"

export const Title = () => {
    return (
        <Flex
            mt={['5', '14']}
            w='100%'
            maxW='1240px'
            justify='center'
        >
            <Heading
                lineHeight='56px'
                fontWeight='500'
                fontSize='36px'
                textAlign='center'>Vamos nessa?<br />Então escolha seu continente</Heading>
        </Flex>
    )
}