import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import "./AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [city, setcity] = useState("");
  const [description, setDescription] = useState("");
  const [long, setlong] = useState("");
  const [price, setPrice] = useState(0);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  function handleAdd(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !category.trim() ||
      !title.trim() ||
      !city.trim() ||
      !description.trim() ||
      !long.trim() ||
      !price ||
      !img1.trim() ||
      !img2.trim() ||
      !img3.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }

    let obj = {
      category,
      title,
      city,
      description,
      long,
      price: +price,
      img1,
      img2,
      img3,
    };
    addProduct(obj);
    setCategory("");
    setTitle("");
    setcity("");
    setDescription("");
    setlong("");
    setPrice(0);
    setImg1("");
    setImg2("");
    setImg3("");
  }

  return (
    <>
      <h2 id="add-title">Добавление товара</h2>
      <form id="form-add" onSubmit={e => handleAdd(e)}>
        <TextField
          className="outlined-basic"
          label="Страна"
          variant="outlined"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фирма"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Город"
          variant="outlined"
          value={city}
          onChange={e => setcity(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Срок работы"
          variant="outlined"
          value={long}
          onChange={e => setlong(e.target.value)}
        />
        <TextField
          type="number"
          className="outlined-basic"
          label="Цена"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 1"
          variant="outlined"
          value={img1}
          onChange={e => setImg1(e.target.value)}
        />{" "}
        <TextField
          className="outlined-basic"
          label="Фото 2"
          variant="outlined"
          value={img2}
          onChange={e => setImg2(e.target.value)}
        />{" "}
        <TextField
          className="outlined-basic"
          label="Фото 3"
          variant="outlined"
          value={img3}
          onChange={e => setImg3(e.target.value)}
        />
        <Button
          variant="contained"
          long="error"
          type="submit"
          className="addbtn">
          Добавить
        </Button>
      </form>
    </>
  );
};

export default AddProduct;
