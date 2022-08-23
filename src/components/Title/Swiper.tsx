import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Flex } from "@chakra-ui/react";
import { Swip } from "./Swip";

SwiperCore.use([Navigation, Pagination])

export default function SwiperComponent() {
  return (
    <Flex
      w='100%'
      maxW='1240px'
      mt={['1.25rem', '3.25rem']}
      mx='auto'
      h={['250px', '458px']}
      mb={['5', '10']}>
      <Swiper 
        navigation={true} 
        pagination={true}
        modules={[Navigation, Pagination]} className="mySwiper">
        <SwiperSlide>
          <Swip 
            link='europa'
            imgUrl="/img/europe.jpg"
            title="Europa">O continente mais antigo.</Swip>
        </SwiperSlide>
        <SwiperSlide>
          <Swip 
            link='northamerica'
            imgUrl="/img/northAmerica.jpg"
            title="América do norte">Região de superpotências econômicas.</Swip>
        </SwiperSlide>
        <SwiperSlide>
          <Swip 
            link='africa'
            imgUrl="/img/africa.jpg"
            title="África">O berço da vida.</Swip>
        </SwiperSlide>
        <SwiperSlide>
          <Swip 
            link='southamerica'
            imgUrl="/img/southAmerica.jpg"
            title="América do sul">Abundância do tropical.</Swip>
        </SwiperSlide>
        <SwiperSlide>
          <Swip 
            link='asia'
            imgUrl="/img/asia.jpg"
            title="Ásia">Maior continente.</Swip>
        </SwiperSlide>
        <SwiperSlide>
          <Swip 
            link='oceania'
            imgUrl="/img/oceania.jpg"
            title="Oceania">O novíssimo mundo.</Swip>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
