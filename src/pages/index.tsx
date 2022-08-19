import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Divider } from '../components/Divider'
import { Navigation } from '../components/Navigation'
import { Title } from '../components/Title'
import SwiperComponent from '../components/Title/Swiper'
import { TravelType } from '../components/TravelType'

const Home: NextPage = () => {
  return (
    <>
      <Navigation/>
      <Banner/>
      <TravelType/>
      <Divider/>
      <Title/>
      <SwiperComponent />
    </>
  )
}

export default Home
