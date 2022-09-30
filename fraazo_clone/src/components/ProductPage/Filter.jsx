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

const Filter = () => {
  const [expanded, setExpanded] = useState("panel1");

  const fruitFilter = [
    "Exotic Fruits",
    "Fresh Fruits",
    "Fruite Combos",
    "Mangoes",
  ];

  const vegFilter = [
    "Daily Veggies",
    "Herbs & Leafies",
    "Exotic Vegetables",
    "Cuts,Peeled & Sproutes",
    "Vegetable Combos",
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
          expandIcon={<AddIcon sx={{ color: "#5dc6ad" }} />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>Fruits</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }}>
          {fruitFilter.map((ele, indx) => (
            <Box className="filterchild" key={indx}>
              <ArrowForwardIosSharpIcon
                sx={{ fontSize: "11px", marginRight: "6px" }}
              />
              {fruitFilter[indx]}
            </Box>
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
          expandIcon={<AddIcon sx={{ color: "#5dc6ad" }} />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>Vegetables</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }}>
          {vegFilter.map((ele, indx) => (
            <Box className="filterchild" key={indx}>
              <ArrowForwardIosSharpIcon
                sx={{ fontSize: "11px", marginRight: "6px" }}
              />
              {vegFilter[indx]}
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Filter;
