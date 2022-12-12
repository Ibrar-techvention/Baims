import { display } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DropDown from "../DropDown";
import style from "./navbar.module.css";
import { useTranslation } from "next-i18next";
const Navbar = ({ scroll,setQuery }) => {
  const { t: translation } = useTranslation();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const teacherData = translation("teacherData", { returnObjects: true });

  const router = useRouter();
  const { locale } = useRouter();
  let language = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "ar",
      label: "العربية",
    },
  ];
  const handleChange = (value) => {
    if (value === "ar") {
      document.dir = "rtl";
    } else {
      document.dir = "ltr";
    }
    router.push(router.route, router.asPath, {
      locale: value,
    });
  };
  return (
    <div
    dir="ltr"
      className={style.navbarContainer}
      style={{
        transition: "all 0.5s ease 0s",
        backgroundColor: `${scroll >= 1000 ? "transparent" : ""}`,
        backdropFilter: `${scroll >= 1000 ? "blur(20px)" : ""}`,
        color: `${
          scroll === 1000
            ? "black"
            : scroll === 2200
            ? "white"
            : scroll === 3000
            ? "black"
            : "white"
        }`,
      }}
    >
      <div className={style.leftSide}>
        <div className={style.logo}>
          {scroll === 1000 ? (
            <Image src="/img/logo-black.svg" width={118} height={52} alt="" />
          ) : scroll === 2200 ? (
            <Image src="/img/logo.svg" width={118} height={52} alt="" />
          ) : scroll === 3000 ? (
            <Image src="/img/logo-black.svg" width={118} height={52} alt="" />
          ) : (
            <Image src="/img/logo.svg" width={118} height={52} alt="" />
          )}
        </div>
      </div>
      <div
        className={style.humburgerIcon}
        onClick={() => setShowMediaIcons(true)}
      >
        {scroll === 1000 ? (
          <Image src="/img/hamburger-black.png" width={50} height={50} alt="" />
        ) : scroll === 2200 ? (
          <Image src="/img/hamburger-white.png" width={50} height={50} alt="" />
        ) : scroll === 3000 ? (
          <Image src="/img/hamburger-black.png" width={50} height={50} alt="" />
        ) : (
          <Image src="/img/hamburger-white.png" width={50} height={50} alt="" />
        )}
      </div>
      <div className={style.middleSide}>
        <div className={style.explore}>{translation("explore")}</div>
     
        <div className={style.searchBar}>
          <Image src="/img/search-icon.png" alt="" width={30} height={30} />
          <input
            className={style.input}
    
            type="text"
            onChange={event => setQuery(event.target.value.toLowerCase())}
            placeholder={translation("inputLabel")}
          />
       
        </div>
        
        <div className={style.rightSide}>
          <DropDown
            // selected={language[0]}
            languages={language}
            setSelected={handleChange}
            style={{ width: "100%", top: "20px", left: "0px" }}
            justifybtn="flex-start"
            component={
              <div className={style.languageSelector}>
                <div className={style.worldLogo}>
                  {scroll === 1000 ? (
                    <Image
                      src="/img/world-icon-black.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  ) : scroll === 2200 ? (
                    <Image
                      src="/img/world-icon.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  ) : scroll === 3000 ? (
                    <Image
                      src="/img/world-icon-black.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src="/img/world-icon.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  )}
                </div>
                <span>{locale === "ar" ? "العربية" : "English"}</span>
                <div className={style.downKey}>
                  {scroll === 1000 ? (
                    <Image
                      src="/img/down-key-black.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  ) : scroll === 2200 ? (
                    <Image
                      src="/img/down-key-icon.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  ) : scroll === 3000 ? (
                    <Image
                      src="/img/down-key-black.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src="/img/down-key-icon.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  )}
                </div>
              </div>
            }
          />
          <div
            className={style.loginBtn}
            style={{
              backgroundColor: `${
                scroll === 3000
                  ? "rgb(69, 170, 242)"
                  : scroll === 1200
                  ? "white"
                  : scroll === 1000
                  ? "rgb(69, 170, 242)"
                  : "white"
              }`,
              color: "black",
            }}
          >
           {translation("login")}
          </div>
        </div>
      </div>
      {showMediaIcons && (
        <div className={style.mobileView}>
          <div className={style.content}>
            <div
              className={style.cross}
              onClick={() => setShowMediaIcons(false)}
            >
              <Image src="/img/cross.png" alt="" width={30} height={30} />
            </div>
            <div className={style.searchBar}>
              <Image src="/img/search-icon.png" alt="" width={30} height={30} />
              <input
                className={style.input}
                type="text"
                placeholder="Search for subject or teeacher &..."
              />
            </div>
            <div className={style.account}>
              <div className={style.contentHead}>Account</div>
              <div className={style.contentBody}>
                <p> {translation("login")}</p>
                <div>
                  <Image
                    src="/img/right-arrow-black.png"
                    alt=""
                    height={20}
                    width={20}
                  />
                </div>
              </div>
            </div>
            <div className={style.language}>
              <div className={style.contentHead}>Language</div>
              <DropDown
                // selected={language[0]}
                languages={language}
                setSelected={handleChange}
                style={{ width: "200px", top: "20px", left: "0px" }}
                justifybtn="flex-start"
                component={
                  <div className={style.languageSelector}>
                    <div className={style.worldLogo}>
                      <Image
                        src="/img/world-icon-black.png"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <span>EN</span>
                    <div className={style.downKey}>
                      <Image
                        src="/img/down-key-black.png"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                }
              />
            </div>
            <div className={style.getTheApp}>
              <Image
                src="/img/app-store-download.svg"
                alt=""
                width={150}
                height={100}
              />
              <Image
                src="/img/play-store-download.svg"
                alt=""
                width={150}
                height={100}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;