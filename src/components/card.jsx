"use client";
import "../styles/card.css";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { LiaTagsSolid } from "react-icons/lia";
export default function Card({ img, title, price, rating }) {
  if (rating > 5) rating = 5;
  if (rating < 1) rating = 1;
  return (
    <div className="card">
      <div className="background"></div>
      <span className="sale">sale</span>
      <img src={img} />
      <p className="title">{title}</p>
      <div className="star">
        {[...Array(5)].map((_, index) => {
          return <FaStar color={index < rating ? "#f4ca49" : "#e1e1e1"} />;
        })}
      </div>
      <p className="price">${price}</p>
      <button className="addCart">
        <span className="plus">+</span>Add to Cart
      </button>
      <div className="popup">
        <FaRegHeart className="heart" size={22} />
        <LiaTagsSolid size={23} />
      </div>
    </div>
  );
}
