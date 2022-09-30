import React from 'react'
import Banner from '../components/Banner'
import BestDeals from '../components/BestDeals'
import Fruits from '../components/Fruits'
import PrimaryNavbar from '../components/PrimaryNavbar'
import SecondaryNavbar from '../components/SecondaryNavbar'
import SectionBox from '../components/SectionBox'
import Vegetables from '../components/Vegetables'

const Home = () => {
  return (
    <>
      <PrimaryNavbar/>
      <SecondaryNavbar/>
      <Banner/>
      <BestDeals/>
      <SectionBox/>
      <Fruits/>
      <Vegetables/>
    </>
  )
}

export default Home