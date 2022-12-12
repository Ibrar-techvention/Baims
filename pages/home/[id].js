import SubjectDetails from "../../components/Subjects/SubjectDetails"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Navbar from "../../components/Navbar";
import style from '../../components/Subjects/ExplorePopularSection.module.css';
 const Subjects=()=>{
    return(
      <>
      <Navbar scroll={3000} />
      <div className={style.marginSubject}>
        <SubjectDetails/>
        </div>
        </>
    )
 }
 export const getServerSideProps = async ({
    locale,
  }) => ({
    props: {
      ...(await serverSideTranslations(locale ?? 'en')),
    },

  })

 export default Subjects