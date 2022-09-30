import React from "react";
import "../../stylesheets/HomePage/show_case.css";
import Carousel from "better-react-carousel";
import ProductCard from "../ProductPage/ProductCard";
import { Box } from "@mui/material";
import styles from "../../stylesheets/HomePage/CenterBox.module.css";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import * as action from "../../Redux/AppRedux/actions"

const BestDeals = () => {
  const best_deals = [
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/VDRU12.png?width=256&height=256&format=webp",
      "frz-fw-500": "Drumstick",
      "frz-pack-size": "100 g",
      "frz-price-slash": 15,
      "frz-priceslash-discount": "20 % OFF",
      "frz-rp-10": 12,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/VCHI22.png?width=256&height=256&format=webp",
      "frz-fw-500": "Green Chillies",
      "frz-pack-size": "100 g",
      "frz-rp-10": 10,
    },
    {
      "lazy-image src":
        "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/028/original/data?width=256&height=256&format=webp",
      "frz-fw-500": "Baingan (Brinjal)",
      "frz-pack-size": "250 g",
      "frz-priceslash-discount": "25 % OFF",
      "frz-price-slash": 40,
      "frz-rp-10": 30,
    },
    {
      "lazy-image src":
        "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/003/250/original/data?width=256&height=256&format=webp",
      "frz-fw-500": "Lemon (Nimboo)",
      "frz-pack-size": "100 g",
      "frz-priceslash-discount": "25 % OFF",
      "frz-price-slash": 15,
      "frz-rp-10": 10,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/ESWE13.png?width=256&height=256&format=webp",
      "frz-fw-500": "Sweet Corn (Bhutta)",
      "frz-pack-size": "1 pc",
      "frz-priceslash-discount": "20 % OFF",
      "frz-price-slash": 25,
      "frz-rp-10": 20,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/VGAV12.png?width=256&height=256&format=webp",
      "frz-fw-500": "Beans Cluster (Gavar)",
      "frz-pack-size": "250 g",
      "frz-rp-10": 39,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/VCAB12.png?width=256&height=256&format=webp",
      "frz-fw-500": "Cabbage",
      "frz-pack-size": "1 pc",
      "frz-rp-10": 39,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/BONI11.png?width=256&height=256&format=webp",
      "frz-fw-500": "Onion",
      "frz-pack-size": "1 kg",
      "frz-rp-10": 26,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/VCAP12.png?width=256&height=256&format=webp",
      "frz-fw-500": "Green Capsicum",
      "frz-pack-size": "250 g",
      "frz-rp-10": 32,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/FCOC1.png?width=256&height=256&format=webp",
      "frz-fw-500": "Coconut",
      "frz-pack-size": "1 pc",
      "frz-rp-10": 30,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/FBAN14.png?width=256&height=256&format=webp",
      "frz-fw-500": "Robusta Banana",
      "frz-pack-size": "1 kg",
      "frz-rp-10": 47,
    },
    {
      "lazy-image src":
        "https://imageprod.fraazo.com/fraazo-prod/images/images/000/006/605/original/data?width=256&height=256&format=webp",
      "frz-fw-500": "Tomato",
      "frz-pack-size": "1 kg",
      "frz-rp-10": 35,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/FMOS13.png?width=256&height=256&format=webp",
      "frz-fw-500": "Mosambi (Sweet Lime)",
      "frz-pack-size": "1 kg",
      "frz-rp-10": 75,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=256&height=256&format=webp",
      "frz-fw-500": "Indian Avocado",
      "frz-pack-size": "1 pc",
      "frz-rp-10": 89,
    },
    {
      "lazy-image src":
        "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/006/original/data?width=256&height=256&format=webp",
      "frz-fw-500": "Royal Gala Apple",
      "frz-pack-size": "4 pcs",
      "frz-rp-10": 140,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/EMUS2.png?width=256&height=256&format=webp",
      "frz-fw-500": "Button Mushroom",
      "frz-pack-size": "1 pkt",
      "frz-rp-10": 49,
    },
    {
      "lazy-image src":
        "https://imagemaster.fraazo.com/fraazo-master/products/BPOT11.png?width=256&height=256&format=webp",
      "frz-fw-500": "Potato",
      "frz-pack-size": "1 kg",
      "frz-rp-10": 40,
    },
    {
      "lazy-image src":
        "https://imageprod.fraazo.com/fraazo-prod/images/images/000/009/046/original/data?width=256&height=256&format=webp",
      "frz-fw-500": "3 kg Onion",
      "frz-pack-size": "3 kg",
      "frz-rp-10": 78,
    },
  ];

  const dispatch=useDispatch()
  const curousel_col=useSelector(store=>store.AppReducer.curousel_col)

  useEffect(()=>{

    if(window.innerWidth>=1250 && window.innerWidth<Infinity){
      dispatch(action.setCurouselCol(5))
    }
    else if(window.innerWidth>1000 && window.innerWidth<1250){
      dispatch(action.setCurouselCol(4))
    }
    else{
      dispatch(action.setCurouselCol(3))
    }

  },[])
  

  const handle_resize=()=>{
    if(window.innerWidth>=1250 && window.innerWidth<Infinity){
      dispatch(action.setCurouselCol(5))
    }
    else if(window.innerWidth>1000 && window.innerWidth<1250){
      dispatch(action.setCurouselCol(4))
    }
    else dispatch(action.setCurouselCol(3))
  }

  window.addEventListener("resize",handle_resize)

  


  return (
    <div className="show_case">
      <h1>BEST DEALS</h1>
      <br />
      <Carousel cols={curousel_col} rows={1} gap={10} loop={false}>
        {best_deals.map((item, index) => (
          <Carousel.Item key={index}>
            <Box className={styles.carousalBox}>
              <ProductCard key={index} product={item} />
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
};

export default BestDeals;
