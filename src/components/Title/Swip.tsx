import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface SwipProps {
    link: string,
    imgUrl: string,
    title: string,
    description: string
}

export const Swip: React.FC<SwipProps> = ({ imgUrl, title, description, link: ref }) => {
    return (
        <Flex
            w='100%'
            h='100%'
            justify='center'
            align='center'
            bgImage={`url('${imgUrl}')`}
            direction='column'
            textAlign='center'
            bgPosition='center'
            bgRepeat='no-repeat'
            bgBlendMode='darken'
            bgSize='cover'>
            <Link href={`/continents/${ref}`}>
                <a>
                    <Heading
                        color='gray.50'
                        fontSize={['3xl', '5xl']}>{title}</Heading>
                    <Text
                        color='gray.100'
                        fontWeight='bold'>
                        {description}
                    </Text>
                </a>
            </Link>
        </Flex>
    )
}