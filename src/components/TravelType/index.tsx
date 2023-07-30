import { Center, Flex, useMediaQuery } from "@chakra-ui/react"
import { TravelIcon } from "./TravelIcon"

export const TravelType = () => {
    const [isMobile] = useMediaQuery("(max-width: 480px)");

    return (
        <>
            <Center>
                <Flex
                    padding={[".5rem", ".5rem", "1rem", "1rem"]}
                    justifyContent={isMobile ? "center" : "space-between"} // Centraliza no mobile, espaço entre em outras telas
                    alignItems={["center", "center", "center", "center"]}
                    width={["100%", "100%", "100%", "100vw"]}
                    maxWidth={["100%", "100%", "100%", "1160px"]}
                    mt={["36px", "36px", "150px", "150px"]}
                    flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
                >
                    <TravelIcon url="/nightlife/cocktail.svg">vida noturna</TravelIcon>
                    <TravelIcon url="/nightlife/surf.svg">praia</TravelIcon>
                    <TravelIcon url="/nightlife/building.svg">moderno</TravelIcon>
                    <TravelIcon url="/nightlife/museum.svg">clássico</TravelIcon>
                    <TravelIcon url="/nightlife/earth.svg">e mais...</TravelIcon>
                </Flex>
            </Center>
        </>
    )
}