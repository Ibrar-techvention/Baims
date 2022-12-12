import React from 'react';
import { useTranslation } from "next-i18next";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import style from './ratingSection.module.css';
import RatingSectionCard from './RatingSectionCard';

const RatingSection = () => {
    const { t: translation } = useTranslation();

    return (
        <div className={style.RatingSectionContainer} dir="ltr">
            <div className={style.UpperSection}>
                <div className={style.heading}>{translation("teachers")}</div>
                <div className={style.description}>
                    <span>
                        {translation('subjects')}
                       {translation("ratingText")} </span>
                </div>
            </div>
            <div className={style.carouselSection}>
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Navigation, Autoplay, Lazy]}
                        speed={5000}
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={5}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        navigation
                        breakpoints={
                            {
                                50: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                420: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                650: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                1000: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                }
                            }
                        }
                    >
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Navigation, Autoplay, Lazy]}
                        speed={2500}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={5}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        breakpoints={
                            {
                                50: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                420: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                650: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                1000: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                }
                            }
                        }
                    >
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Navigation, Autoplay, Lazy]}
                        speed={3500}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={5}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        navigation
                        breakpoints={
                            {
                                50: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                420: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                650: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                1000: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                }
                            }
                        }
                    >
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                        <SwiperSlide><RatingSectionCard /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}

export default RatingSection;