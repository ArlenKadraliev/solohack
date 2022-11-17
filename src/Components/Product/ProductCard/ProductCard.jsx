import React from "react";

import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ obj }) => {
  let navigate = useNavigate();

  return (
    <div className="start-way">
      <span>{obj.category}</span>
      <div className="film-general">
        <div
          className="film-year film-year__photo"
          // style={{
          //   backgroundImage: `URL(${obj.img1})`,
          //   backgroundSize: "cover",}}
        >
          <img width="27.8%" src={obj.img1} alt="" className="oblojka" />
          <img
            width="27.8%"
            src={obj.img2}
            alt=""
            className="oblojka"
            id="photo2"
          />
          <img
            width="27.8%"
            src={obj.img3}
            alt=""
            className="oblojka"
            id="photo3"
          />
        </div>
        <div className="film-info">
          <div className="film-info-size">
            <div className="film-way">{obj.title}Название</div>
            <div className="film-desk">{obj.description}описание работы</div>
            <Link to={`/details/${obj.id}`}>
              <div>
                <img
                  src="https://img.favpng.com/13/15/24/information-button-computer-icons-png-favpng-4zVCzhiqyrCYfGBS7JDdx80ZN.jpg"
                  alt=""
                  width={"100px"}
                  height={"30px"}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

    // <Card sx={{ maxWidth: 347, marginLeft: "20%" }}>
    //   <Link to={`/details/${obj.id}`}>
    //     <CardMedia
    //       className="cardMedia"
    //       component="img"
    //       height="auto"
    //       image={obj.img1}
    //       alt={obj.title}
    //     />
  );
};

export default ProductCard;
