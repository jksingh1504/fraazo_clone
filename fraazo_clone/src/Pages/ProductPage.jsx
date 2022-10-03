import { Box } from "@mui/system";
import React from "react";
import Filter from "../components/ProductPage/Filter";
import ProductList from "../components/ProductPage/ProductList";
import "../stylesheets/ProductPage/ProductPage.css";
import PrimaryNavbar from "../components/Navbar/PrimaryNavbar";
import SecondaryNavbar from "../components/Navbar/SecondaryNavbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

// import Footer2 from "../components/HomePage/Footer2";

const ProductPage = () => {

	const category=useParams()
	const [reRender,setRerender]=useState(true)


	window.scrollTo({top:0,behavior:"smooth"})

	return (
		<>
			<PrimaryNavbar/>
			<SecondaryNavbar/>
            <Box id="ProductPageBody">
                <Filter/>
                <ProductList/>
            </Box>
		</>
	)
};

export default ProductPage;
