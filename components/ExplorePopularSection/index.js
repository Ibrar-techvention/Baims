/* eslint-disable @next/next/no-img-element */
import React from "react";
import ExploreCourseBtn from "../ExploreCourseBtn";
import style from "./ExplorePopularSection.module.css";
import { useTranslation } from "next-i18next";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Lazy,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CarouselElement from "./CarouselElement";
import Link from "next/link";
import Image from "next/image";

const ExplorePopularSection = ({}) => {
  const { t: translation } = useTranslation();
    const subjects = translation("subjectss", { returnObjects: true });
  const nextButton = () => {
    let selector = document.querySelectorAll(".swiper-button-next");
    for (let i = 0; i < selector.length; i++) {
      selector[i]?.click();
    }
  };
  const prevButton = () => {
    let selector = document.querySelectorAll(".swiper-button-prev");
    for (let i = 0; i < selector.length; i++) {
      selector[i]?.click();
    }
  };

  return (
    <div dir="ltr" className={style.ExplorePopularSectionContainer}>
      <div className={style.headingSection}>
        <div className={style.title}>{translation("exploreCourses")}</div>
        <div className={style.buttons}>
          <div className={style.prevBtn} onClick={prevButton}>
            <img src="/img/arrow-left-white.svg" alt="" />
          </div>
          <div className={style.nextBtn} onClick={nextButton}>
            <img
              src="/img/arrow-left-white.svg"
              alt=""
              style={{ transform: "scale(-1, 1)" }}
            />
          </div>
        </div>
      </div>
      <div className={style.carosel}>
        <div>
          <Swiper
            // install Swiper modules
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Navigation,
              Autoplay,
              Lazy,
            ]}
            speed={2000}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slidesPerView="auto"
            navigation
            breakpoints={{
              50: {
                slidesPerView: 1,
               spaceBetween: 20,
               },
              300: {
                 slidesPerView: 2,
                spaceBetween: 20,
              },
               420: {
                 slidesPerView: 3,
                 spaceBetween: 20,
               },

              600: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1000: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
             }}
          >
         {subjects.map((data,index)=>(
     <SwiperSlide key={index}>
        <Link href={`/home/${data.id}`}>
          <CarouselElement data={data} />
       </Link> 
       </SwiperSlide>
    
  ))}
        



          </Swiper>
        </div>
    
      </div>
              <Link href="./home">
            <div className={style.btn}>
                <ExploreCourseBtn />
            </div> 
            </Link>
    </div>
  );
};

export default ExplorePopularSection;
