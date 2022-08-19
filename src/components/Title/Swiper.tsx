import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Flex } from "@chakra-ui/react";

export default function SwiperComponent() {
  return (
    <Flex
      w='100%'
      maxW='1240px'
      mx='auto'
      h={['250px', '458px']}
      mb={['5', '10']}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </Flex>
  );
}
