import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";

const Filter = ({ category, setCategory, price, setPrice }) => {
  return (
    <FormControl
      sx={{
        backgroundColor: "#4848486b",
        borderRadius: "10px",
        width: "50vw",
        height: "100%",
      }}>
      <FormLabel
        sx={{
          margin: "auto",
          color: "white",
          fontSize: "20px",
          marginTop: "10px",
        }}
        id="demo-radio-buttons-group-label">
        По Категориям
      </FormLabel>
      <RadioGroup
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={category}
        onChange={e => setCategory(e.target.value)}>
        <FormControlLabel
          value="all"
          label={<DensitySmallIcon />}
          control={<Radio />}
        />
        <FormControlLabel
          value="Франция"
          label={<AdbIcon />}
          control={<Radio />}
        />
        <FormControlLabel
          value="Германия"
          control={<Radio />}
          label={<AccessibilityIcon />}
        />
      </RadioGroup>
      <FormLabel
        sx={{ margin: "auto", color: "white", fontSize: "18px" }}
        id="demo-radio-buttons-group-label">
        По ценам
      </FormLabel>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={e => setPrice(e.target.value)}
        valueLabelDisplay="auto"
        style={{
          width: "90%",
          margin: "auto ",
          color: "white",
          marginBottom: "10px",
        }}
        min={0}
        max={50000}
      />
    </FormControl>
  );
};

export default Filter;
