import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import React, { useState } from "react";
import "../../stylesheets/ProductPage/ProductPage.css";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../Redux/AppRedux/actions";

const Filter = () => {
  let active_panel;

  const active_category = useSelector(
    (store) => store.AppReducer.active_category
  );

  if (
    active_category === "exotic-fruits" ||
    active_category === "fresh-fruits" ||
    active_category === "fruit-combos"
  ) {
    active_panel = "panel1";
  } else {
    active_panel = "panel2";
  }

  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(active_panel);

  const fruitFilter = [
    { content: "Exotic Fruits", link: "exotic-fruits" },
    { content: "Fresh Fruits", link: "fresh-fruits" },
    { content: "Fruit Combos", link: "fruit-combos" },
  ];

  const vegFilter = [
    { content: "Daily Veggies", link: "daily-veggies" },
    { content: "Herbs & Leafies", link: "herbs-and-leafies" },
    { content: "Exotic Vegetables", link: "exotic-vegetables" },
    { content: "Vegetable Combos", link: "vegetable-combos" },
  ];

  const handleChange = (x) => {
    if (x === expanded) setExpanded(false);
    else setExpanded(x);
  };

  return (
    <Box id="Filter">
      <Accordion
        disableGutters
        sx={{
          boxShadow: "none",
          marginBottom: "0px",
          borderBottom: " 1px solid rgb(235, 235, 235)",
        }}
        expanded={expanded === "panel1"}
        onChange={() => handleChange("panel1")}
      >
        <AccordionSummary
          sx={{ flexDirection: "row-reverse" }}
          expandIcon={<AddIcon sx={{ color: "#0ab05b" }} />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>Fruits</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }}>
          {fruitFilter.map((ele, indx) => (
            <Link
              onClick={() => dispatch(action.set_active_category(ele.link))}
              className={active_category === ele.link ? "active" : ""}
              to={`/fruits/${ele.link}`}
              key={indx}
            >
              <Box className="filterchild">
                <ArrowForwardIosSharpIcon
                  sx={{ fontSize: "11px", marginRight: "6px" }}
                />
                {ele.content}
              </Box>
            </Link>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        sx={{
          boxShadow: "none",
          marginBottom: "0px",
          borderBottom: " 1px solid rgb(235, 235, 235)",
        }}
        expanded={expanded === "panel2"}
        onChange={() => handleChange("panel2")}
      >
        <AccordionSummary
          sx={{ flexDirection: "row-reverse" }}
          expandIcon={<AddIcon sx={{ color: "#0ab05b" }} />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>Vegetables</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }}>
          {vegFilter.map((ele, indx) => (
            <Link
              onClick={() => dispatch(action.set_active_category(ele.link))}
              className={active_category === ele.link ? "active" : ""}
              to={`/vegetables/${ele.link}`}
              key={indx}
            >
              <Box className="filterchild" key={indx}>
                <ArrowForwardIosSharpIcon
                  sx={{ fontSize: "11px", marginRight: "6px" }}
                />
                {ele.content}
              </Box>
            </Link>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Filter;
