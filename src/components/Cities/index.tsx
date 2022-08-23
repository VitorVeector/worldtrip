import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import { CardCity } from "./CardCity"

export const Cities = () => {
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
                    <GridItem>
                        <CardCity country='Reino Unido' city='Londres' imgUrl='https://www.melhoresdestinos.com.br/wp-content/uploads/2019/06/passagens-aereas-londres-capa2019-05.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Royaume-Uni.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Portugal' city='Lisboa' imgUrl='https://picchioni.com.br/blog/wp-content/uploads/2020/01/lisboa.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Portugal.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='França' city='París' imgUrl='https://www.boqnews.com/wp-content/uploads/2015/04/paris.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/France.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Alemanha' city='Berlim' imgUrl='https://www.eurodicas.com.br/wp-content/uploads/2017/11/tudo-sobre-a-alemanha-1-1200x675.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Allemagne.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Espanha' city='Madrid' imgUrl='https://magazine.zarpo.com.br/wp-content/uploads/2019/02/Madri-tem-tudo-e-muito-mais-770x450.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Espagne.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Ucrania' city='Kiev' imgUrl='https://www.infoescola.com/wp-content/uploads/2012/08/kiev-ucr%C3%A2nia_594440360-1000x667.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Ukraine.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Itália' city='Roma' imgUrl='https://eurodicas.com.br/wp-content/uploads/2021/04/coliseu-roma.jpg' flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Royaume-Uni.png'/>
                    </GridItem>
                    <GridItem>
                        <CardCity country='Suíça' city='Berna' imgUrl="https://www.segurospromo.com.br/blog/wp-content/uploads/2021/03/Capital-da-Suica.jpg" flagUrl='https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Suisse.png' />
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
    )
}