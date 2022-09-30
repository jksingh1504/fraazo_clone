import React from "react";
import "../stylesheets/secondary_navbar.css";

const SecondaryNavbar = () => {
  const fruits_list = [
    { type: "Exotic Fruits" },
    { type: "Fresh Fruits" },
    { type: "Fruit Combos" },
  ];

  const vegetables_list = [
    { type: "Daily Veggies" },
    { type: "Herbs and Leafies" },
    { type: "Exotic Vegetables" },
    { type: "Cuts, Peeled and Sprouts" },
    { type: "Vegetable Combos" },
  ];

  return (
    <div id="secondary_nav">
      <div className="fruits_section">
        <div>
          <p>Fruits</p>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="list">
          {fruits_list.map((ele, indx) => (
            <p key={indx}>{ele.type}</p>
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
            <p key={indx}>{ele.type}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
