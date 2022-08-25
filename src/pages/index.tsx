import { GetServerSideProps } from 'next'

import { Banner } from '../components/Banner'
import { Divider } from '../components/Divider'
import { Navigation } from '../components/Navigation'
import { Title } from '../components/Title'
import { TravelType } from '../components/TravelType'

import SwiperComponent from '../components/Title/Swiper'

import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'

export interface ContinentProps {
  continents: {
    slug: string,
    title: string,
    description: string,
    banner: string
  }[]
}

export default function Home({ continents }: ContinentProps) {
  return (
    <>
      <Navigation />
      <Banner />
      <TravelType />
      <Divider />
      <Title />
      <SwiperComponent continents={continents}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    Prismic.Predicates.at('document.type', 'continent')
  )

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      description: continent.data.description,
      banner: continent.data.image_banner_slide.url
    }
  })
  return { props: { continents } }
}