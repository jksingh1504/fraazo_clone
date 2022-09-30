import React from "react";
import "../../stylesheets/HomePage/show_case.css";
import Carousel from "better-react-carousel";
import ProductCard from "../ProductPage/ProductCard";
import { Box } from "@mui/material";
import styles from "../../stylesheets/HomePage/CenterBox.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Fruits = () => {

    const fruits = [
        {
            "frz-product-card href":
                "https://fraazo.com/fruits/exotic-fruits/indian-avocado-9",
            "lazy-image src":
                "https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=256&height=256&format=webp",
            "frz-fw-500": "Indian Avocado",
            "frz-pack-size": "1 pc",
            "frz-rp-10": 80,
            tooltiptext: "",
            "frz-price-slash": 100,
            "frz-priceslash-discount": "20 % OFF",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/fruits/fresh-fruits/coconut-42",
            "lazy-image src":
                "https://imagemaster.fraazo.com/fraazo-master/products/FCOC1.png?width=256&height=256&format=webp",
            "frz-fw-500": "Coconut",
            "frz-pack-size": "1 pc",
            "frz-rp-10": 30,
            tooltiptext: "",
            "frz-price-slash": 38,
            "frz-priceslash-discount": "25 % OFF",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/fruits/exotic-fruits/dragon-fruit-50",
            "lazy-image src":
                "https://imagemaster.fraazo.com/fraazo-master/products/FDRA1.png?width=256&height=256&format=webp",
            "frz-fw-500": "Dragon Fruit",
            "frz-pack-size": "1 pc",
            "frz-rp-10": 89,
            tooltiptext: "",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/fruits/exotic-fruits/zespri-golden-kiwi-69",
            "lazy-image src":
                "https://imagemaster.fraazo.com/fraazo-master/products/FKIW1.png?width=256&height=256&format=webp",
            "frz-fw-500": "Zespri Golden Kiwi",
            "frz-pack-size": "1 pkt",
            "frz-rp-10": 135,
            tooltiptext: "(3 pcs)",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/fruits/fresh-fruits/mosambi-sweet-lime-82",
            "lazy-image src":
                "https://imagemaster.fraazo.com/fraazo-master/products/FMOS13.png?width=256&height=256&format=webp",
            "frz-fw-500": "Mosambi (Sweet Lime)",
            "frz-pack-size": "1 kg",
            "frz-rp-10": 75,
            "frz-price-slash": 90,
            "frz-priceslash-discount": "20 % OFF",
            tooltiptext: "",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/fruits/fresh-fruits/muskmelon-kharbooja-84",
            "lazy-image src":
                "https://imagemaster.fraazo.com/fraazo-master/products/FMUS1.png?width=256&height=256&format=webp",
            "frz-fw-500": "Muskmelon (Kharbooja)",
            "frz-pack-size": "1 pc",
            "frz-rp-10": 60,
            tooltiptext: "(650 - 1200 g)",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/fruits/exotic-fruits/pear-beauty-95",
            "lazy-image src":
                "https://imageprod.fraazo.com/fraazo-prod/images/images/000/009/243/original/data?width=256&height=256&format=webp",
            "frz-fw-500": "Pear Beauty",
            "frz-pack-size": "500 g",
            "frz-rp-10": 89,
            tooltiptext: "",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/fruits/fresh-fruits/watermelon-117",
            "lazy-image src":
                "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/117/original/data?width=256&height=256&format=webp",
            "frz-fw-500": "Watermelon",
            "frz-pack-size": "1 pc",
            "frz-rp-10": 52,
            tooltiptext: "(1.5 - 2.7 kg)",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/fruits/exotic-fruits/imported-avocado-235",
            "lazy-image src":
                "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/235/original/data?width=256&height=256&format=webp",
            "frz-fw-500": "Imported Avocado",
            "frz-pack-size": "1 pc",
            "frz-rp-10": 71,
            tooltiptext: "",
        },
        {
            "frz-product-card href":
                "https://fraazo.com/fruits/fruit-combo/coconut-combo-2-pcs-coconuts-445",
            "lazy-image src":
                "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/445/original/data?width=256&height=256&format=webp",
            "frz-fw-500": "Coconut Combo (2 pcs)",
            "frz-pack-size": "1 combo",
            "frz-rp-10": 60,
            tooltiptext: "",
        },
    ];


  const curousel_col=useSelector(store=>store.AppReducer.curousel_col)


  return (
    <div className="show_case">
      <h1>Fruits <Link to="/products" style={{textDecoration:"none",color:"#ea669f",fontSize:"16px",fontWeight:"500"}}>(Veiw All)</Link></h1>
      <br />
      <Carousel cols={curousel_col} rows={1} gap={10} loop={false}>
        {fruits.map((item, index) => (
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

export default Fruits;