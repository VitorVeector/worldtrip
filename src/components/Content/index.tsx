import { Grid, Flex, Heading, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, PopoverHeader, Text, PopoverBody, HStack, Icon } from "@chakra-ui/react"
import { RiInformationLine } from 'react-icons/ri'

export const Content = () => {
    return (
        <Flex
            justify='center'>
            <Flex
                w='100%'
                maxWidth='1160px'
                mt={['1.5rem', '5rem']}
                direction={['column', 'row']}
                justify='space-between'
                align='center'>
                <Text
                    maxWidth={['343px', '600px']}
                    textAlign='justify'
                    fontSize={['0.875rem', '1.5rem']}>
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
                </Text>
                <Flex
                    w='100%'
                    mt={['1rem','0']}
                    maxWidth={['343px', '490px']}
                    justify='space-between'>
                    <Flex
                        direction='column'
                        justify='center'
                        align='center'>
                        <Heading
                            color='yellow'
                            fontSize={['1.5rem', '3rem']}>50</Heading>
                        <Text
                            fontSize={['1.125rem', '1.5rem']}
                            color='gray.600'
                            fontWeight={['400', '600']}>países</Text>
                    </Flex>
                    <Flex
                        direction='column'
                        justify='center'
                        align='center'>
                        <Heading
                            color='yellow'
                            fontSize={['1.5rem', '3rem']}>60</Heading>
                        <Text
                            fontSize={['1.125rem', '1.5rem']}
                            color='gray.600'
                            fontWeight={['400', '600']}>línguas</Text>
                    </Flex>
                    <Flex
                        h='100%'
                        align='flex-end'>
                        <Flex
                        direction='column'
                        justify='center'
                        align='center'>
                        <Heading
                            color='yellow'
                            fontSize={['1.5rem', '3rem']}>27</Heading>
                        <Text
                            fontSize={['1.125rem', '1.5rem']}
                            color='gray.600'
                            fontWeight={['400', '600']}>cidades +100</Text>
                        </Flex>
                        <Popover>
                            <PopoverTrigger>
                                <span>
                                <Icon
                                    ml='1'
                                    alignSelf='flex-end'
                                    cursor='pointer'
                                    as={RiInformationLine}
                                    color='gray.300'>Trigger</Icon>
                                </span>
                            </PopoverTrigger>
                            <PopoverContent
                                bg='gray.300'
                                color='gray.700'>
                                <PopoverArrow 
                                    bg='gray.700'/>
                                <PopoverCloseButton />
                                <PopoverBody>Londres, Amsterdã, Berlim, Lisboa</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>

    )
}