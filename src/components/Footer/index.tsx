import { Flex, Text } from "@chakra-ui/react"

export const Footer = () => {
    return(
        <Flex
            height={"4rem"}
            backgroundColor={"gray.200"}
            borderTopRadius={"2rem"}
            justifyContent={"center"}
            alignItems={"center"}>
                <Text
                    mx='auto'
                    padding={['0 1rem', '0']}
                    maxWidth={['343px', '600px']}
                    textAlign='justify'
                    fontSize={['0.5rem', '1rem']}
                    cursor={"default"}>
                        @copyright 2023
                </Text>
        </Flex>
    )
}