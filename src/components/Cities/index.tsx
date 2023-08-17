import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react"
import { CardCity } from "./CardCity"

import { ContinentProps } from '../../pages/continents/[slug]'

export const Cities = ({continent}: ContinentProps) => {
    return (
        <Flex
            w='100%'
            mt={['2rem', '5rem']}
            mb={['2rem', '5rem']}
            justify='center'>
            <Flex
                w='100%'
                maxWidth={['300px', '1160px']}
                direction='column'>
                <Heading
                >Cidades +100</Heading>
                <Grid
                    mt={['1.5rem', '3rem']}
                    w='100%'
                    maxWidth='1160px'
                    templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
                    gap={['1.25rem', '2.8125rem']}
                    alignItems='center'
                    justifyContent='center'>
                        {continent?.main_cities.map((card: { country: string; city: string; thumbnail: string; flag: string }) => (
                            <GridItem
                                key={card.city}>
                                <CardCity country={card.country} city={card.city} imgUrl={card.thumbnail} flagUrl={card.flag}/>
                            </GridItem>
                        ))}
                </Grid>
            </Flex>
        </Flex>
    )
}