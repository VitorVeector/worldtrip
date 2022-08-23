import { Stack, Flex, Grid, Image, useBreakpointValue } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"


export const Navigation = () => {
    const wideVersion = useBreakpointValue({ base: false, lg: true })

    const { asPath } = useRouter()
    const isHomePage = asPath === '/'



    return (
        <Flex
            as='header'
            h={['50px', '100px']}
            width='100%'
            mx='auto'
            px='1rem'
            align='center'
            justify='center'>
            <Grid
                h='100%'
                mx='auto'
                w='100%'
                maxWidth='1160px'
                templateColumns={'repeat(3, 1fr)'}
                justifyContent='center'
                alignItems='center'>
                {!isHomePage && (
                    <Link href={'/'}>
                        <a>
                            {wideVersion ?
                                <Image
                                    src='/wideBackPage.svg'
                                    alt="Voltar para home"
                                    width={'1rem'}
                                    gridColumn='1'
                                /> :
                                <Image
                                    src='/backPage.svg'
                                    alt="Voltar para home"
                                    width={'0.5rem'}
                                    gridColumn='1'
                                />}
                        </a>
                    </Link>
                )
                }

                <Image
                    src='/LogoWorldTrip.svg'
                    alt="Logo de WorldTrip"
                    width={['81px', '186.7px']}
                    alignItems='center'
                    justifySelf='center'
                    gridColumn='2'
                />
                <Stack></Stack>
            </Grid>
        </Flex >
    )
}

