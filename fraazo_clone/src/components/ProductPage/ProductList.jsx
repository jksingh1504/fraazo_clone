import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../stylesheets/ProductPage/ProductPage.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ProductCard from "./ProductCard";
// import axios from "axios";
import { useSelector } from "react-redux";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	//@ts-ignore
	const cartItem=useSelector(store=>store.AppReducer.cart)

	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:8080/Fresh_Fruits")
	// 		.then((r) => setProducts(r.data));
	// }, [setProducts]);

	return (
		<>
			<Box>
				<Breadcrumbs
					aria-label="breadcrumb"
					separator={<NavigateNextIcon fontSize="small" />}
					sx={{
						height: "34px",
						cursor: "pointer",
						fontSize: "14px",
						color: "rgb(165, 165, 165)",
					}}
				>
					<Link underline="hover" color="inherit" href="/">
						Home
					</Link>
					<Link
						underline="hover"
						color="inherit"
						href="/material-ui/getting-started/installation/"
					>
						Core
					</Link>
					<Typography sx={{ fontSize: "14px" }} color="text.primary">
						Breadcrumbs
					</Typography>
				</Breadcrumbs>
				<Typography sx={{ height: "40px" }} color="text.primary">
					Exotic Fruits
				</Typography>
				<Box id="productList">
					{products.map((ele, indx) => (
						<ProductCard key={indx} cartItem={cartItem} product={ele} />
					))}
				</Box>
			</Box>
		</>
	);
};

export default ProductList;
