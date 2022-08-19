import { Box, Flex, Stack, Text, Image, useBreakpointValue } from "@chakra-ui/react"

export const Banner = () => {
    const wideVersion = useBreakpointValue({base: false, lg: true})
    const bgSize = useBreakpointValue({base: '250px', lg: '368.21px'})

    return (
        <Flex>
            <Flex
                w='100%'
                h={bgSize}
                bgImage="url('/img/bgBanner.jpg')"
                justify='center'
                bgPosition={['100% 80%', '100% 80%']}
                bgRepeat='no-repeat'
                bgSize='cover'
                >
                <Flex
                    w='100%'
                    maxWidth='1160px'
                    justify='space-between'
                    align='center'
                    mx='1rem'
                    >
                    <Stack>
                        <Text
                            fontWeight='medium'
                            color='gray.50'
                            fontSize={['1.25rem', '2.25rem']}
                            lineHeight={['1.875rem','3.375rem']}
                            as='h2'>5 continentes,<br/> infinitas possibilidades</Text>
                        <Text 
                            as='p'
                            fontSize={['0.875rem', '1.25rem']}
                            mt={['.5rem', '1.25rem']}
                            color='gray.100'>Chegou a hora de tirar do papel a viagem que você tanto sonhou.</Text>
                    </Stack>
                    {wideVersion && (
                        <Image
                            mt='10.625rem'
                            src='/Airplane.svg' />
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}