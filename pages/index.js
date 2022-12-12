import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import HomePageSections from '../components/HomePageSections'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from '../styles/Home.module.css'
import RatingSection from '../components/RatingSection'
import ExplorePopularSection from '../components/ExplorePopularSection'
import CounterSection from '../components/CounterSection'
import DownloadToSection from '../components/DownloadToSection'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';
import { useTranslation } from "next-i18next";
import HomePage from "../components/Subjects/Subjects"

export default function Home(_props) {
  const { t: translation } = useTranslation();

  const [scroll, setScroll] = useState(0);
  const [background, setBackground] = useState('#FFFFFF');
  const [color, setColor] = useState('rgb(2, 52, 71)');
  useEffect(() => {
    let footer = document.querySelector('#HomePageFooter');
    if (footer) {
      footer.style.display = 'none';
    }
    window.addEventListener("scroll", () => {
      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if (scrollTop > 3000) {
        setBackground('#FFFFFF');
        setColor('rgb(2, 52, 71)');
        setScroll(3000);
      }
      else if (scrollTop > 2200) {
        setBackground('rgb(2, 52, 71)');
        setColor('#FFFFFF');
        setScroll(2200);
      }
      else if (scrollTop > 1200) {
        setBackground('rgb(254, 199, 108)');
        setColor('rgb(2, 52, 71)');
        setScroll(1200);
        if (footer) {
          footer.style.display = 'block';
        }
      }
      else if (scrollTop > 550) {
        setScroll(1000);
        setBackground('#FFFFFF');
        setColor('rgb(2, 52, 71)');
        if (footer) {
          footer.style.display = 'none';
        }
      }
      else if (scrollTop > 200) {
        setScroll(200);
      }
      else {
        if (footer) {
          footer.style.display = 'none';
          setBackground('#FFFFFF');
          setColor('rgb(2, 52, 71)');
          setScroll(0);
        }
      }
    })
  }, []);
  const data=[
    {
    id:"a",
    height:2000,
    component: <HomePageSections
    mainImg='/img/sec1_en.mp4'
    title={translation("highQuality")}
    description={translation("videoText")}
    video='true'
    secondImg='/img/glasses-img.svg'
  />
  },
  {
  id:"b",
  height:6000,
  component: <HomePageSections
  mainImg='/img/sec2-en.png'
          title={translation("summaries")}
          description={translation("summaryText")}
          secondImg='/img/sec2-icon.svg'
          // mainImgWidth='80%'
          mainImgHeight='500px'

/>
},
{
  id:"c",
  component:  <HomePageSections
  mainImg='/img/sec3-en.png'
  title={translation("liveSession")}
  description={translation("sessionText")}
  secondImg='/img/sec3-icon.svg'
  mainImgHeight='500px'
  // mainImgWidth='50%'
  marginRight="7rem"
  btn='white'
/>

},

{
  id:"d",
  component:   <RatingSection />
},
{
  id:"e",
  component:   <ExplorePopularSection />
},
{
  id:"f",
  component:    <CounterSection />
}
,{
  id:"j",
  component:  <DownloadToSection />
}
  ]
  const [query, setQuery] = useState("")
  return (
    <>
    <div className={styles.containerrr}>
      <Navbar scroll={scroll} setQuery={setQuery} />
      <Banner scroll={scroll}/>      
      <div className={styles.scrollingBody}
        style={{
          transition: 'background-color 0.9s ease 0s, border 0.5s ease 0s',
          backgroundColor: `${background}`,
          color: `${color}`
        }}
      >
       
 {  
  data.map(post=> { 
    // if(post.id==query){ 
    //  return window.scrollTo({ behavior: 'smooth',
    //  top:post.height,})
    // }
    // else{ 
      return( 
    <div key={post.id}>
      {post.component}
    </div>
      )
      
  
    })}
      </div>
      <Footer />
      <div>
      
      </div>
    </div>
    </>
  )
}
export const getStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
})