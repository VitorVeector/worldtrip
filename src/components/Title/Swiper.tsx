import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Flex } from "@chakra-ui/react";
import { Swip } from "./Swip";
import { ContinentProps } from "../../pages";

SwiperCore.use([Navigation, Pagination])

export default function SwiperComponent({continents}: ContinentProps) {
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
          {continents.map(continent => (
            <SwiperSlide>
            <Swip 
              link={continent.slug}
              imgUrl={continent.banner}
              title={continent.title}
              description={continent.description}/>
          </SwiperSlide>
          ))}
      </Swiper>
    </Flex>
  );
}


