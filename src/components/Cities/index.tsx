import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import { CardCity } from "./CardCity"

export const Cities = () => {
    return (
        <Flex
            w='100%'
            mt={['2rem', '5rem']}
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
                    <GridItem>
                        <CardCity country='Reino Unido' city='Londres' imgUrl='https://www.melhoresdestinos.com.br/wp-content/uploads/2019/06/passagens-aereas-londres-capa2019-05.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Royaume-Uni.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Portugal' city='Lisboa' imgUrl='https://www.melhoresdestinos.com.br/wp-content/uploads/2019/06/passagens-aereas-londres-capa2019-05.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Royaume-Uni.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='França' city='París' imgUrl='https://www.melhoresdestinos.com.br/wp-content/uploads/2019/06/passagens-aereas-londres-capa2019-05.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Royaume-Uni.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Alemanha' city='Berlim' imgUrl='https://www.melhoresdestinos.com.br/wp-content/uploads/2019/06/passagens-aereas-londres-capa2019-05.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Royaume-Uni.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Espanha' city='Madrid' imgUrl='https://www.melhoresdestinos.com.br/wp-content/uploads/2019/06/passagens-aereas-londres-capa2019-05.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Royaume-Uni.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Ucrania' city='Kiev' imgUrl='https://www.melhoresdestinos.com.br/wp-content/uploads/2019/06/passagens-aereas-londres-capa2019-05.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Royaume-Uni.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Itália' city='Roma' imgUrl='https://eurodicas.com.br/wp-content/uploads/2021/04/coliseu-roma.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Royaume-Uni.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Suíça' city='Berna' imgUrl='https://www.segurospromo.com.br/blog/wp-content/uploads/2021/03/Capital-da-Suica.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Royaume-Uni.png'/>
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
    )
}