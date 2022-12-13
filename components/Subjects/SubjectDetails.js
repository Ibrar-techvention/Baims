/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Navbar from '../Navbar'
import style from "./slogan.module.css";

import {subjectss} from '../../public/locales/en/common.json'
import { useRouter } from 'next/router'
import { useTranslation } from "next-i18next";



const SubjectDetails = () => {
    const { t: translation } = useTranslation();
    const subjects = translation("subjectss", { returnObjects: true });
    console.log(subjects)
const router = useRouter()

const { id } = router.query

  return (
    <div>   
<div className={style.main}>
  {  subjects.map(val=>(
     console.log(val.id),
    (val.id=={id}.id)?(<>
  <div className={style.profile}>
<div className={style.detail}>
    <div className={style.imgData}>
        <div className={style.img}>
        <img src="/img/backgroundO.jpg" alt="image" style={{borderRadius:'1rem'}} width={180} height={145} />
    </div>
        <div>
            <h2>{val.name}</h2>
            <h3>{val.code}</h3>
            <h4 className={style.mobileMargin}>{val.rating}/5</h4>
        </div>
    </div>
    

    <div className={style.num}>
        <div className={style.sub}>
            <h2>{val.instructor.basic_statistics.subscribers_count}</h2>
            <p>Subscriber</p>
        </div>
        <div className={style.vertical}></div>
        <div className={style.dur}>
            <h2>5 hr 9 min</h2>
            <p>Total Durations</p> 
        </div>
        <div className={style.vertical}></div>
        <div className={style.video}>
            <h2>{val.instructor.basic_statistics.videos_count}</h2>
            <p>Videos</p>
        </div>
    </div>
</div>
<h3 className={style.h1}>Instructed By</h3>
<div className={style.teacher}>
<div className={style.imgData2}>
    <div style={{margin:'1rem'}}>
    <img src={val.instructor.profile_picture.url} alt="image" style={{borderRadius:'50%'}} width={70} height={70} />
</div>
<div>
    <h3>{val.instructor.name}</h3>
    <h6>{val.instructor.basic_statistics.rating}/5</h6>
</div>

</div>
<div className={style.num2}>
    <div className={style.views}>
        <h3>{val.instructor.basic_statistics.views_count} views</h3>
      
    </div>
    <div className={style.subscribers}>
        <h3>{val.instructor.basic_statistics.subscribers_count} Subscriber</h3>
        
    </div>
    <div className={style.sybjectss}>
        <h3>{val.instructor.basic_statistics.subjects_count} Subjects</h3>
        
    </div>
</div>
</div>
    </div>
    </>):(  <></>)
    ))}
    <div className={style.courses}>
<div className={style.allcourse}>
    <div className={style.course} >
        <h4>Get All courses</h4>
    <h3>Free</h3>
    </div>
    <button className={style.subscribeBtn}>Subscribe</button>
    
   
</div>
    </div>
   </div>



    </div>
  )
}


export default SubjectDetails