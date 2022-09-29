import React from 'react'
import Banner from '../components/Banner'
import PrimaryNavbar from '../components/PrimaryNavbar'
import SecondaryNavbar from '../components/SecondaryNavbar'

const Home = () => {
  return (
    <>
      <PrimaryNavbar/>
      <SecondaryNavbar/>
      <Banner/>
    </>
  )
}

export default Home