import React from "react";
import CardImage from "../../assets/card_image_1.jpg";
import { FaRegHeart } from "react-icons/fa";
import "./card.css";


const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="card shadow">
            <img src={CardImage} alt="cardimage" className="card-img-top" />
            <div className="card-img-overlay">
              <button className="house-name-button">Penbroke</button>
              <i className="like-icon">
                <FaRegHeart />
              </i>
            </div>
            <div className="card-body">
              <h2 className="card-title">20MFCFA</h2>
              <p className="card-text">
                4 beds | 2 living Rms | 2,344 sqft listing provided by
                Steve'sConstruction Yde, Simbock, Carefou Ebanda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
