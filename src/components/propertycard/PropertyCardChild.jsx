import React from "react";

const PropertyCardChild = (props) => {
  const { image, title, description, button } = props.object;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="row mt-5 mb-5">
            <div className="col-12 col-lg-4 d-flex justify-content-center property-cards">
              <div className="card shadow">
                <img src={image} alt="cardimage1" className="card-img-top" />
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p className="card-text">{description}</p>
                  <div className="static-card-button">
                    <button className="btn btn-link">{button}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardChild;
