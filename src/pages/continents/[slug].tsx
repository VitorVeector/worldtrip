import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Navigation } from "../../components/Navigation";
import { getPrismicClient } from "../../services/prismic";

import Prismic from '@prismicio/client'
import { RichText } from "prismic-dom";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
    slug: string
}

export interface ContinentProps {
    continent: {
        slug: string,
        title: string,
        banner: string,
        summary: string,
        summary_countries: string,
        summary_languages: string,
        summary_cities: string,
        summary_list_cities: string,
        main_cities?: {
            city: string,
            country: string,
            thumbnail: string,
            flag: string
        }
    }[]
}

export default function Continent({ continent }: ContinentProps) {
    return (
        <Flex
            direction='column'>
            <Navigation />
            <ContinentBanner continent={continent} />
            <Content continent={continent}/>
            <Cities continent={continent}/>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query(
        [Prismic.Predicates.at('document.type', 'continent')]
    )

    const paths = response.results.map(continent => {
        return {
            params: {
                slug: continent.uid,
            }
        }
    })
    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const prismic = getPrismicClient()
    const { slug } = context.params as IParams
    const response = await prismic.getByUID('continent', String(slug), {})

    const continent = {
        slug: response.uid,
        title: response.data.title,
        banner: response.data.image_banner_slide.url,
        summary: response.data.summary,
        summary_countries: response.data.summary_countries,
        summary_languages: response.data.summary_languages,
        summary_cities: response.data.summary_cities,
        summary_list_cities: response.data.summary_list_cities,
        main_cities: response.data.main_cities.map((capitain: any) => {
            return {
                city: capitain.main_city,
                country: capitain.main_country,
                thumbnail: capitain.city_image.url,
                flag: capitain.flag_country.url
                }
        })
    }
    return { props: { continent }, revalidate: 2000 }
}
