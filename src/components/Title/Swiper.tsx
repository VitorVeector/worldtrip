import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Flex } from "@chakra-ui/react";
import { Swip } from "./Swip";
import { ContinentProps } from "../../pages";



SwiperCore.use([Navigation, Pagination])

export default function SwiperComponent({ continents }: ContinentProps) {
    return (
        <Flex
            w='100%'
            maxW='1240px'
            mt={['1.25rem', '3.25rem']}
            mx='auto'
            h={['250px', '458px']}
            mb={['5', '10']}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                navigation={true}
                loop={true}
                pagination={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate: 100,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: true,
                }}
                modules={[Navigation, Pagination, EffectCoverflow]} className="mySwiper">
                {continents.map(continent => (
                    <SwiperSlide
                        key={continent?.title}>
                        <Swip
                            link={continent?.slug}
                            imgUrl={continent?.banner}
                            title={continent?.title}
                            description={continent?.description} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    );
}


