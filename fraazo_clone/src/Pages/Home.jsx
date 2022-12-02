import React, { useEffect } from "react";
import Banner from "../components/HomePage/Banner";
import BestDeals from "../components/HomePage/BestDeals";
import Fruits from "../components/HomePage/Fruits";
import PrimaryNavbar from "../components/Navbar/PrimaryNavbar";
import SecondaryNavbar from "../components/Navbar/SecondaryNavbar";
import SectionBox from "../components/HomePage/SectionBox";
import Vegetables from "../components/HomePage/Vegetables";
import { useDispatch } from "react-redux";
import * as action from "../Redux/AppRedux/actions"

const Home = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(action.set_active_category(""))
  },[dispatch])

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
