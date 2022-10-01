import React from "react";
import "../../stylesheets/HomePage/show_case.css";
import Carousel from "better-react-carousel";
import ProductCard from "../ProductPage/ProductCard";
import { Box } from "@mui/material";
import styles from "../../stylesheets/HomePage/CenterBox.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Vegetables = () => {

    const vegetables = [
        {
            "frz-product-card href":
                "https://fraazo.com/vegetables/herbs-leafies/green-chillies-41",
            "lazy-image src":
                "https://imagemaster.fraazo.com/fraazo-master/products/VCHI22.png?width=256&height=256&format=webp",
            "frz-fw-500": "Green Chillies",
            "frz-pack-size": "100 g",
            "frz-rp-10": 12,
            "frz-price-slash": 15,
            "frz-priceslash-discount": "20 % OFF",
            tooltiptext: "",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/vegetables/herbs-leafies/coriander-leaves-dhania-kothimbir-43",
            "lazy-image src":
                "https://imagemaster.fraazo.com/fraazo-master/products/LCOR21.png?width=256&height=256&format=webp",
            "frz-fw-500": "Coriander Leaves (Dhania)",
            "frz-pack-size": "100 g",
            "frz-price-slash": 30,
            "frz-priceslash-discount": "10 % OFF",
            "frz-rp-10": 27,
            tooltiptext: "",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/vegetables/herbs-leafies/curry-leaves-48",
            "lazy-image src":
                "https://imagemaster.fraazo.com/fraazo-master/products/LCUR11.png?width=256&height=256&format=webp",
            "frz-fw-500": "Curry Leaves",
            "frz-pack-size": "50 g",
            "frz-rp-10": 9,
            "frz-price-slash": 10,
            "frz-priceslash-discount": "10 % OFF",
            tooltiptext: "",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/vegetables/exotic-veggies/button-mushroom-83",
            "lazy-image src":
                "https://imagemaster.fraazo.com/fraazo-master/products/EMUS2.png?width=256&height=256&format=webp",
            "frz-fw-500": "Button Mushroom",
            "frz-pack-size": "1 pkt",
            "frz-rp-10": 49,
            tooltiptext: "(Approx 200 g)",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/vegetables/daily-veggies/onion-85",
            "lazy-image src":
                "https://imagemaster.fraazo.com/fraazo-master/products/BONI11.png?width=256&height=256&format=webp",
            "frz-fw-500": "Onion",
            "frz-pack-size": "1 kg",
            "frz-rp-10": 27,
            "frz-price-slash": 30,
            "frz-priceslash-discount": "10 % OFF",
            tooltiptext: "",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/vegetables/cut-vegetables/pulao-combo-320",
            "lazy-image src":
                "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/320/original/data?width=256&height=256&format=webp",
            "frz-fw-500": "Pulao Combo",
            "frz-pack-size": "200 g",
            "frz-rp-10": 80,
            tooltiptext: "",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/vegetables/exotic-veggies/portobello-mushroom-428",
            "lazy-image src":
                "https://imageprod.fraazo.com/fraazo-prod/images/images/000/008/454/original/data?width=256&height=256&format=webp",
            "frz-fw-500": "Portobello Mushroom",
            "frz-pack-size": "1 pkt",
            "frz-rp-10": 69,
            "frz-price-slash": 15,
            tooltiptext: "(Approx 200 g)",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/vegetables/daily-veggies/tomato-3730",
            "lazy-image src":
                "https://imageprod.fraazo.com/fraazo-prod/images/images/000/006/605/original/data?width=256&height=256&format=webp",
            "frz-fw-500": "Tomato",
            "frz-pack-size": "1 kg",
            "frz-rp-10": 35,
            tooltiptext: "",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/vegetables/vegetable-combos/masala-combo-3837",
            "lazy-image src":
                "https://imageprod.fraazo.com/fraazo-prod/images/images/000/008/980/original/data?width=256&height=256&format=webp",
            "frz-fw-500": "Masala Combo",
            "frz-pack-size": "350g",
            "frz-rp-10": 49,
            tooltiptext: "350g",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/vegetables/vegetable-combos/detox-mix-combo-500-g-carrot-500-g-beetroot-3853",
            "lazy-image src":
                "https://imageprod.fraazo.com/fraazo-prod/images/images/000/009/177/original/data?width=256&height=256&format=webp",
            "frz-fw-500": "Detox Mix Combo (500 g Carrot + 500 g Beetroot)",
            "frz-pack-size": "1 combo",
            "frz-rp-10": 76,
            tooltiptext: "",
        },
    ];

  const curousel_col=useSelector(store=>store.AppReducer.curousel_col)

  return (
    <div className="show_case">
      <h1>Vegetables <Link to="/products" style={{textDecoration:"none",color:"rgb(255, 78, 78)",fontSize:"16px",fontWeight:"500"}}>(Veiw All)</Link></h1>
      <br />
      <Carousel cols={curousel_col} rows={1} gap={10} loop={false}>
        {vegetables.map((item, index) => (
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

export default Vegetables;