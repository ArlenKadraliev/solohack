import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [card, setCard] = useState(0);
  const [email, setEmail] = useState();

  function Checking() {
    // name.preventDefault();
    if (!name.trim() || !phone || !card || !email.trim()) {
      alert("Pleas fill in all fields!!!");
    }
    setName("");
    setPhone(0);
    setCard(0);
    setEmail("");
  }
  return (
    <div
      className="paymentPage_div1"
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}>
      <h2>Check in your order</h2>
      <span>Reise.kg</span>
      <br />
      <div className="paymentPage_div2">
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
          placeholder="Enter your name"
          style={{ width: "300px", height: "30px", marginTop: "10px" }}
        />
        <br />
        <input
          type="number"
          onChange={e => setPhone(e.target.value)}
          value={phone}
          placeholder="Enter your phone number"
          style={{ width: "300px", height: "30px", marginTop: "10px" }}
        />
        <br />
        <input
          type="number"
          onChange={e => setCard(e.target.value)}
          value={card}
          placeholder="Enter your credit card number"
          style={{ width: "300px", height: "30px", marginTop: "10px" }}
        />
        <br />
        <input
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your emaill"
          style={{ width: "300px", height: "30px", marginTop: "10px" }}
        />
      </div>
      <Link to="/">
        <button
          onClick={() => Checking()}
          style={{
            width: "150px",
            height: "30px",
            marginTop: "15px",
            borderRadius: "10px",
          }}>
          Order
        </button>
      </Link>
    </div>
  );
};

export default PaymentPage;
