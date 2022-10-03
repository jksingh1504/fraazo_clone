import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../stylesheets/Navbar/secondary_navbar.css";
import * as action from "../../Redux/AppRedux/actions";

const SecondaryNavbar = () => {
  const fruits_list = [
    { type: "Exotic Fruits", link: "exotic-fruits" },
    { type: "Fresh Fruits", link: "fresh-fruits" },
    { type: "Fruit Combos", link: "fruit-combos" },
  ];

  const vegetables_list = [
    { type: "Daily Veggies", link: "daily-veggies" },
    { type: "Herbs & Leafies", link: "herbs-and-leafies" },
    { type: "Exotic Vegetables", link: "exotic-vegetables" },
    { type: "Vegetable Combos", link: "vegetable-combos" },
  ];

  const active_category = useSelector(
    (store) => store.AppReducer.active_category
  );

  const dispatch = useDispatch();

  return (
    <div id="secondary_nav">
      <div className="fruits_section">
        <div>
          <p>Fruits</p>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="list">
          {fruits_list.map((ele, indx) => (
            <Link
              onClick={() => dispatch(action.set_active_category(ele.link))}
              className={active_category === ele.link ? "active" : ""}
              to={`/fruits/${ele.link}`}
              key={indx}
            >
              {ele.type}
            </Link>
          ))}
        </div>
      </div>
      <div className="vegetable_section">
        <div>
          <p>Vegetables</p>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="list">
          {vegetables_list.map((ele, indx) => (
            <Link
              onClick={() => dispatch(action.set_active_category(ele.link))}
              className={active_category === ele.link ? "active" : ""}
              to={`/vegetables/${ele.link}`}
              key={indx}
            >
              {ele.type}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
