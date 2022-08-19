import { Flex, Image } from "@chakra-ui/react"

export const Divider = () => {
    return (
        <Flex
            justifyContent='center'
            mt={['2.25rem', '5rem']}            
            width='100%'>
            <Image
                src='./Divider.svg' />
        </Flex>
    )
}