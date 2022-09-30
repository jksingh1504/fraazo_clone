import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartPage from "../../Pages/CartPage";
import "../../stylesheets/Navbar/primary_navbar.css";

const PrimaryNavbar = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div id="navbar">
      <div className="nav_box1">
        <div className="logo">
          <Link to="/">
            <img
              src="https://webasset.fraazo.com/production/b70a67f4e825e3d388ac4466952c20a8.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="location">
          <span className="material-icons">location_on</span> <p>povai</p>
        </div>
      </div>
      <div className="nav_box2">
        <input
          className="search_bar"
          type="text"
          placeholder="Find fresh vegetables, fruits and dairy..."
        />
        <div className="search_icon">
          <span className="material-icons">search</span>
        </div>
      </div>
      <div className="nav_box3">
        <div className="cart" onClick={() => setOpenCart(true)}>
          <div className="cart_icon_and_count">
            <span className="material-icons">shopping_cart</span>
            <div className="cart_count">0</div>
          </div>
          <p>cart</p>
        </div>
        <div className="login">
          <Drawer
            transitionDuration={400}
            PaperProps={{
              sx: { width: "550px", height: "1000px", left: "unset" },
            }}
            anchor={"top"}
            open={openCart}
            onClose={() => setOpenCart(false)}
          >
            <CartPage setOpenCart={setOpenCart} />
          </Drawer>
          <span className="material-icons">person</span>
          <p>login</p>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
