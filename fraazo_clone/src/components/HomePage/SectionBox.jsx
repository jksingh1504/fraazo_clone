import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/section_box.css";

const SectionBox = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div id="section_box">
        <Link to="/products">
          <div>
            <img
              src="https://imagemaster.fraazo.com/fraazo-master/webban/Fruits.png"
              alt="fruits_section"
            />
          </div>
        </Link>
        <Link to="/products">
          <div>
            <img
              src="https://imagemaster.fraazo.com/fraazo-master/webban/Vegetables.png"
              alt="vegetables_section"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SectionBox;
