/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./ExplorePopularSection.module.css";
import { useTranslation } from "next-i18next";
import "swiper/css";

import Subjects from "./Subjects";

const CarouselSection = ({}) => {


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
