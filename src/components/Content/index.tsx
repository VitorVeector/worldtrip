import { Grid, Flex, Heading, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, PopoverHeader, Text, PopoverBody, HStack, Icon } from "@chakra-ui/react"
import { RiInformationLine } from 'react-icons/ri'

import { ContinentProps } from '../../pages/continents/[slug]'

export const Content = ({continent}: ContinentProps) => {
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
                    mx='auto'
                    padding={['0 1rem', '0']}
                    maxWidth={['343px', '600px']}
                    textAlign='justify'
                    fontSize={['0.875rem', '1.5rem']}>
                    {continent?.summary}
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
                            fontSize={['1.5rem', '3rem']}>{continent?.summary_countries}</Heading>
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
                            fontSize={['1.5rem', '3rem']}>{continent?.summary_languages}</Heading>
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
                            fontSize={['1.5rem', '3rem']}>{continent?.summary_cities}</Heading>
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
                                <PopoverBody>{continent?.summary_list_cities}</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>

    )
}