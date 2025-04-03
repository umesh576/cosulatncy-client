"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide-content">
                        <img src="./s2.jpg" alt="" /></div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content">
                        <img src="./s3.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content">
                        <img src="./s4.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content">
                        <img src="./s5.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content">
                        <img src="./s3.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content">
                        <img src="./s7.jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content">
                        <img src="./s3.jpg" alt="" />
                    </div>
                </SwiperSlide>
          
                <SwiperSlide>
                    <div className="slide-content">
                        <img src="./s3.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider