import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { productContext } from "../../context/ProductContextProvider";
import "./Comment.css";

import Ocenki from "../Ocenki/Ocenki";

const Comment = () => {
  const { readComments, comments, deleteProduct, addComments } =
    useContext(productContext);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      alert("Заполните все поля!");
      return;
    }
    let obj = {
      name,
      comment,
    };
    addComments(obj);
    setName("");
    setComment("");
  }
  useEffect(() => {
    readComments();
  }, []);
  return (
    <div className="container">
      <div>
        {comments
          ? comments.map(item => (
              <>
                <div id="watchList">
                  <hr width="99%" />
                  <div id="details">
                    <span>Имя: {item.name}</span>
                    <span>Коментарий: {item.comment}</span>
                  </div>
                  <Ocenki />
                </div>
              </>
            ))
          : null}
      </div>
      <div id="otziv">
        <h2>Оставить отзыв</h2>
        <form onSubmit={e => handleAdd(e)}>
          <div className="create-col">
            <input
              placeholder="Введите имя"
              label="Имя"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <br />
            <input
              name=""
              id="text-area"
              cols="20"
              rows="2"
              placeholder="Коментарий"
              label="Коментарий"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </div>
          <button></button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
