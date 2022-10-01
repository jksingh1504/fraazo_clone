import { Button } from "@mui/material";
import "../../stylesheets/ProductPage/ProductPage.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddToCartButton = ({ product, cartItem }) => {
  return (
    <Button id="addButton" variant="outlined">
      <AddShoppingCartIcon sx={{ fontSize: "15px",marginLeft:"4px", marginRight: "6px" }} />
      add
    </Button>
  );
};

export default AddToCartButton;
