import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../stylesheets/ProductPage/ProductPage.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ProductCard from "./ProductCard";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as action from "../../Redux/AppRedux/actions";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { category, type } = useParams();
  const cartItem = useSelector((store) => store.AppReducer.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.set_active_category(category));

    fetch(`http://localhost:5000/${type}/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [category, setProducts]);

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
            href="/fruits/exotic-fruits"
          >
            {type}
          </Link>
          <Typography sx={{ fontSize: "14px" }} color="text.primary">
            {category}
          </Typography>
        </Breadcrumbs>
        <Typography sx={{ height: "40px",textTransform:"uppercase"}} color="text.primary">
          {category.split("-").join(" ")}
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
