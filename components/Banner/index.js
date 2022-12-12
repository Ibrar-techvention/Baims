import Image from "next/image";
import React, { useEffect ,useState} from "react";
import DropDown from "../DropDown/subjectsDropDown";
import style from "./banner.module.css";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Banner = ({ scroll }) => {
  const { t: translation } = useTranslation();
  const subjects = translation("subjectss", { returnObjects: true });
  const [country, setCountry] = useState("Kuwait")
  const [school, setSchool] = useState("High School")
  const [grade, setGrade] = useState("Choose")
const handleCountry=(value)=>{
    setCountry(value.instructor.basic_statistics.countries)
}
const handleSchool=(value)=>{
    setSchool(value)
}
const handleGrade=(value)=>{
    setGrade(value.category.name)
}

  return (
    <div id="HomePageBannerContainer">
      <video
        className={style.videoContainer}
        autoPlay
        muted
        loop
        style={{ Width: "100%" }}
      >
        <source src="/img/baims.mp4" type="video/mp4" />
      </video>

      <div
        className={style.bannerContainer}
        style={{ zIndex: `${scroll >= 200 ? "-1" : "0"}` }}
      >
        <div className={style.mainTitle}>{translation("study")}</div>
        <div className={style.subTitle}>{translation("loremText")}</div>
        <div className={style.selectionMenu}>
          <DropDown
            languages={subjects}
            setSelected={handleCountry}
            style={{ width: "100%", top: "80px", borderRadius:"10px", left: "0px", cursor:"pointer" }}
            justifybtn="flex-start"
            dataKey={"instructor.basic_statistics.countries"}
            component={
              <div className={style.country}>
                {translation("country")}
                <span className={style.selected}>{country}</span>
              </div>
            }
          />
          <DropDown
            languages={subjects}
            setSelected={handleSchool}
            style={{ width: "100%", top: "80px", borderRadius:"10px", left: "0px" }}
            justifybtn="flex-start"
            dataKey={"basic_statistics.countries"}

            component={
              <div className={style.stages}>
                {translation("stage")}
                <span className={style.selected}>{school}</span>
              </div>
            }
          />
          <DropDown
            languages={subjects}
            setSelected={handleGrade}
            style={{ width: "100%", top: "80px", borderRadius:"10px", left: "0px" }}
            justifybtn="flex-start"
            dataKey={"category.name"}

            component={
              <div className={style.grade}>
                {translation("clgGrade")}
                <span className={style.selected}>{grade}</span>
              </div>
            }
          />
         <Link href={'./home'}>
          <div className={style.searchBar}  >
            <Image src="/img/search-icon.png" alt="" width={20} height={20} />
            <div>{translation("search")}</div>
          </div>
        </Link>
        </div>

        <div className={style.mobileView}>
          <div className={style.selection}>
            <div className={style.Bar}>
              <div className={style.left}>
                <div>
                  <Image
                    src="/img/country-breadcrumb.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <span>{translation("country")}</span>
              </div>
              <div className={style.rightArrow}>
                <Image
                  src="/img/right-arrow-breadcrumb.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className={style.Bar}>
              <div className={style.left}>
                <div>
                  <Image
                    src="/img/country-breadcrumb.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <span> {translation("stage")}</span>
              </div>
              <div className={style.rightArrow}>
                <Image
                  src="/img/right-arrow-breadcrumb.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className={style.Bar}>
              <div className={style.left}>
                <div>
                  <Image
                    src="/img/country-breadcrumb.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <span> {translation("clgGrade")}</span>
              </div>
              <div className={style.rightArrow}>
                <Image
                  src="/img/right-arrow-breadcrumb.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div
              className={style.loginBtn}
              style={{
                backgroundColor: "rgb(69, 170, 242)",
                color: "white",
              }}
            >
              {translation("search")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
