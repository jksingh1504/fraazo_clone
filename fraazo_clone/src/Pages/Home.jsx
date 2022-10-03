import React from "react";
import Banner from "../components/HomePage/Banner";
import BestDeals from "../components/HomePage/BestDeals";
import Fruits from "../components/HomePage/Fruits";
import PrimaryNavbar from "../components/Navbar/PrimaryNavbar";
import SecondaryNavbar from "../components/Navbar/SecondaryNavbar";
import SectionBox from "../components/HomePage/SectionBox";
import Vegetables from "../components/HomePage/Vegetables";

const Home = () => {
  return (
    <>
      <PrimaryNavbar />
      <SecondaryNavbar />
      <Banner />
      <BestDeals />
      <SectionBox />
      <Fruits />
      <Vegetables />
    </>
  );
};

export default Home;
