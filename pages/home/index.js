import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Navbar from '../../components/Navbar'
import CarouselSection from '../../components/Subjects/CarouselSection'


const home = () => {
  return(
    <div>

    <Navbar scroll={3000}/>
      <CarouselSection/>
    </div>
  )
}

export default home
export const getStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
})