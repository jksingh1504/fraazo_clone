import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/HomePage/section_box.css";
import * as action from "../../Redux/AppRedux/actions";
import { useDispatch } from "react-redux";

const SectionBox = () => {

const dispatch=useDispatch()

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div id="section_box">
        <Link to="/fruits/exotic-fruits">
          <div>
            <img
              src="https://imagemaster.fraazo.com/fraazo-master/webban/Fruits.png"
              alt="fruits_section"
            />
          </div>
        </Link>
        <Link onClick={()=>dispatch(action.set_active_category("daily-veggies"))} to="/vegetables/daily-veggies">
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
