/* eslint-disable @next/next/no-img-element */
import React from "react";
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

import Subjects from "./Subjects";

const CarouselSection = ({}) => {
  const { t: translation } = useTranslation();

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
      <div className={style.carosel}>
        <div>

              <Subjects />
      
        </div>
     
      </div>
              
           
    </div>
  );
};

export default CarouselSection;
