import { Box } from "@mui/system";
import React from "react";
import Filter from "../components/ProductPage/Filter";
import ProductList from "../components/ProductPage/ProductList";
import "../stylesheets/ProductPage/ProductPage.css";
import PrimaryNavbar from "../components/Navbar/PrimaryNavbar";
import SecondaryNavbar from "../components/Navbar/SecondaryNavbar";

// import Footer2 from "../components/HomePage/Footer2";

const ProductPage = () => {

	window.scrollTo({top:0,behavior:"smooth"})

	return (
		<>
			<PrimaryNavbar/>
			<SecondaryNavbar/>
			{/* <Box id="productNav">
				<Box>Fruits</Box>
				<Box>Vegetables</Box>
			</Box> */}
            <Box id="ProductPageBody">
                <Filter/>
                <ProductList/>
            </Box>
			{/* <Footer2/> */}
		</>
	)
};

export default ProductPage;
