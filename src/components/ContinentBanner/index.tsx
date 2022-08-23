import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react"

export const ContinentBanner = () => {
    const wideVersion = useBreakpointValue({base: false, lg: true})

    return(
        <Flex
            w='100%'
            h={['150px', '500px']}
            bgImage="url('/test/londonTest.jpg')"
            bgPosition='center'
            bgRepeat='no-repeat'
            bgSize='cover'
            align='center'
            justify='center'
            >
                {wideVersion ?
                <Flex
                    w='100%'
                    h='100%'
                    maxWidth='1160px'
                    mb='3.75rem'
                    align='flex-end'>
                    <Heading
                        color='gray.50'
                        padding='24px 0px'
                        fontSize='3rem'>Europa</Heading>
                </Flex> :

                <Flex
                    align='center'
                    justify='center'>
                        <Heading
                        color='gray.50'
                        fontSize='1.75rem'>Europa</Heading>
                </Flex>
            }
                
        </Flex>
    )
} 