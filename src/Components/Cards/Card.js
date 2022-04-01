import React from "react";
import "./Card.css";
function Card({ img, header, para }) {
  return (
    <>
      <div className="Feature__card">
        <img src={img} alt="" />
        <h1>{header}</h1>
        <p>{para}</p>
      </div>
    </>
  );
}

export default Card;
