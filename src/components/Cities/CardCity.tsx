import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react"

interface CardCityProps{
    country: string,
    city: string,
    imgUrl: string
    flagUrl: string
}

export const CardCity = ({country, city, imgUrl, flagUrl}: CardCityProps) => {
    return (
        <Flex
            direction='column'
            w='16rem'
            h='17.4375rem'>
            <Box
                borderRadius='5px 5px 0 0'
                w='100%'
                h='173px'
                bgImage={imgUrl}
                bgPosition='center'
                bgRepeat='no-repeat'
                bgSize='cover'>
            </Box>
            <Flex
                h='106px'
                borderRadius='0 0 5px 5px'
                border='1px'
                borderTop='0'
                borderColor='yellow'
                padding='24px'
                align='center'
                justify='space-between'
            >
                <Flex
                    direction='column'
                >
                    <Heading
                        fontSize='1.25rem'
                        marginBottom='.5rem'
                    >{country}</Heading>
                    <Text
                        marginTop='.5rem'
                        fontSize='1rem'
                        color='gray.300'>{city}</Text>
                </Flex>
                <Image
                    borderRadius='full'
                    w='1.875rem'
                    h='1.875rem'
                    src={`${flagUrl}`} />
            </Flex>
        </Flex>
    )
}