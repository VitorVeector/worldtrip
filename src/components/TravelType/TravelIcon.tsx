import { Flex, Stack, Image, Text, useBreakpointValue, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TravelIconProps extends FlexProps{
    children: ReactNode,
    url?: string,
}

export const TravelIcon: React.FC<TravelIconProps> = ({children, url, ...rest}) => {
    const wideVersion = useBreakpointValue({ base: false, lg: true })
    return(
        <Flex {...rest}>  
        {wideVersion ? 
            <Flex>
                <Stack
                    align='center'
                    justifyContent='center'
                    direction='column'>
                    <Image
                        h='85px'
                        src={url} />
                    <Text
                        as='label'
                        fontWeight={600}
                        fontSize='1.5rem'
                    >{children}</Text>
                </Stack> 
            </Flex>
                : 
                <Stack
                align='center'
                justifyContent='center'
                direction='row'>

                <Image src="/nightlife/Ellipse.svg" h='.5rem' />
                <Text
                    as='label'
                    fontWeight={600}
                    fontSize={['1.125rem', '1.5rem']}
                >{children}</Text>
            </Stack>}
        </Flex>
    )
}