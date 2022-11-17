import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import SwiperCore, { Scrollbar, Thumbs } from "swiper";
import { Autoplay } from "swiper";
import { basketContext } from "../../../context/BasketProductProvider";
import { ADMINS } from "../../../helpers/consts";
import { authContext } from "../../../context/AuthContexProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);

  const { addProductToBasket } = useContext(basketContext);
  const { user } = useContext(authContext);
  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      {productDetails ? (
        <Container sx={{ marginTop: "100px" }} className="cont">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Swiper
                scrollbar={{
                  hide: true,
                  width: "70%",
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Scrollbar]}
                className="mySwiper2"
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}>
                <SwiperSlide>
                  <img
                    style={{ width: "80%" }}
                    src={productDetails.img1}
                    alt={productDetails.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ width: "80%" }}
                    src={productDetails.img2}
                    alt={productDetails.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ width: "80%" }}
                    src={productDetails.img3}
                    alt={productDetails.title}
                  />
                </SwiperSlide>
              </Swiper>
            </Grid>

            {/* <Grid item xs={6}>
                    </Grid> */}
            <Typography
              style={{
                paddingBottom: "15px",
                paddingLeft: "10px",
              }}
              variant="h3">
              {productDetails.title}
            </Typography>

            <Typography variant="h3" sx={{ marginLeft: "35px" }}>
              {" "}
              {productDetails.price} Сом
            </Typography>
            <Typography sx={{ marginTop: "10px", color: "rgb(209, 209, 5)" }}>
              <p className="infoLink">Информация о работодатели</p>
              {productDetails.description}
            </Typography>

            {ADMINS.includes(user?.email) ? (
              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: "48%", backgroundColor: "#292929" }}
                  onClick={() => deleteProduct(productDetails.id)}>
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: "48%", backgroundColor: "#292929" }}
                  onClick={() => navigate(`/edit/${productDetails.id}`)}>
                  Edit
                </Button>
              </Box>
            ) : (
              <></>
            )}
          </Grid>
          <Grid>
            <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
                borderRadius: "0",
                width: "10%",
                height: "43px",
                background: "#292929",
                marginBottom: "30px",
              }}
              sx={{ marginLeft: "20px", marginTop: "32px" }}
              onClick={() => addProductToBasket(productDetails)}>
              <Grid
                style={{
                  fontFamily: "Roboto,Arial,sans-serif",
                  fontSize: "20px",
                }}>
                Добавить
              </Grid>
            </Button>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;
