import { Box } from "@mui/system";
import React from "react";
import "../stylesheets/ProductPage.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import AddToCartButton from "./AddToCartButton";


const ProductCard = ({ product}) => {

	return (
		<Box id="ProductCard" >
            <Box className={product["frz-priceslash-discount"]?"discount":"noDiscount"}>{product["frz-priceslash-discount"]}</Box>
			<img width="100%" src={product["lazy-image src"]} alt="" />
			<p>{product["frz-fw-500"]}</p>
			<Box>
				<Box>
					<p>{product["frz-pack-size"]}{product.tooltiptext &&<Tooltip title={product["tooltiptext"]} placement="top"><InfoIcon sx={{fontSize:"16px",marginBottom:"-4px",marginLeft:"6px",color:"#9d9d9d"}}/></Tooltip>}</p>
					<p>
						<CurrencyRupeeIcon sx={{ fontSize: "16px", margin: "-2px" }} />{" "}
						{product["frz-rp-10"]}
						{product["frz-price-slash"]&&product["frz-price-slash"]!==""?<span style={{color:"#9d9d9d",marginLeft:"10px"}}>
							<s>
								<CurrencyRupeeIcon sx={{ fontSize: "16px", margin: "-2px" }} />
								{product["frz-price-slash"]}
							</s>
						</span>:<></>}
					</p>
				</Box>
				<Box>
					<AddToCartButton product={product} />
				</Box>
			</Box>
		</Box>
	);
};

export default ProductCard;
