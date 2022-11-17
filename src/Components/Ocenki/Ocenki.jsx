import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
var num = 8.5;
var numlike = 4.2;
// function calculator() {
//   num += getLabelText;
// }

export default function Ocenki() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}>
      <Typography component="legend">Likes</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={numlike}
        getLabelText={value => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">Rating</Typography>
      <Rating name="customized-10" defaultValue={num} max={10} />
    </Box>
  );
}