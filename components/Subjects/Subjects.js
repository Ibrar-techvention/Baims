// import Image from "next/image";
import style from "./slogan.module.css";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import CarouselElement from '../ExplorePopularSection/CarouselElement'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Lazy,
} from "swiper";


const Subjects = () => {
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
  return( 
    <> 
           <h2 className={style.heading}></h2>
           <div style={{display:'flex',justifyContent:'space-between',margin:'0rem 3rem 0rem 3rem'}}>
        <div></div>
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
   <div className={style.container} >
    <br/>
  
   <Swiper
        slidesPerView={4}
        spaceBetween={8}
        breakpoints={{
          50: {
            slidesPerView: 1,
          
           },
          300: {
             slidesPerView: 1,
           
          },
           420: {
             slidesPerView: 1,
             spaceBetween: 20,
           },

          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
         }}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          Lazy,
        ]}
        speed={2000}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        navigation
        className="mySwiper"
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
</>
);
};

export default Subjects;

