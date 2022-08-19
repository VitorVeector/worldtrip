import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react"
import { TravelIcon } from "./TravelIcon"

export const TravelType = () => {
    const wideVersion = useBreakpointValue({ base: 2, md: 2, lg: 1 })
    const gap = useBreakpointValue({ base: 1, lg: 20 })

    return (
        <Grid
            templateColumns={['1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
            maxWidth='1160px'
            width='100%'
            justifyItems='center'
            mx='auto'
            gap={gap}
            mt={['36px', '150px']}>
            <GridItem >
                <TravelIcon url="/nightlife/cocktail.svg">vida noturna</TravelIcon>
            </GridItem>
            <GridItem >
                <TravelIcon url="/nightlife/surf.svg">praia</TravelIcon>
            </GridItem>
            <GridItem >
                <TravelIcon url="/nightlife/building.svg">moderno</TravelIcon>
            </GridItem>
            <GridItem >
                <TravelIcon url="/nightlife/museum.svg">clássico</TravelIcon>
            </GridItem>
            <GridItem colSpan={wideVersion} alignSelf='center'>
                <TravelIcon url="/nightlife/earth.svg">e mais...</TravelIcon>
            </GridItem>
        </Grid>
    )
}