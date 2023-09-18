import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StaticCard1 from "../../assets/static_card_image1.png";
import StaticCard2 from "../../assets/static_card_image2.png";
import StaticCard3 from "../../assets/static_card_image3.png";
import "./staticcard.css";

const StaticCard = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="row mt-5 mb-5">
            <div className="col-12 col-lg-4 d-flex justify-content-center static-cards">
              <div className="card shadow">
                <img
                  src={StaticCard2}
                  alt="cardimage1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h2 className="card-title">Rent a house</h2>
                  <p className="card-text">
                    We’re creating a seamless online experience – from shopping
                    on the largest rental network, to applying, to paying rent.
                  </p>
                  <div className="static-card-button">
                    <Button className="btn btn-link">Find rentals</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center static-cards">
              <div className="card shadow">
                <img
                  src={StaticCard1}
                  alt="cardimage1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h2 className="card-title">Buy a house</h2>
                  <p className="card-text">
                    Find your place with an immersive photo experience and the
                    most listings, including things you won’t find anywhere else
                  </p>
                  <div className="static-card-button">
                    <Button className="btn btn-link">Browse houses</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center static-cards">
              <div className="card shadow">
                <img
                  src={StaticCard3}
                  alt="cardimage1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h2 className="card-title">Sale a house</h2>
                  <p className="card-text">
                    No matter what path you take to sell your home, we can help
                    you navigate a successful sale.
                  </p>
                  <div className="static-card-button">
                    
                    <Button className="btn btn-link">See your optons</Button>
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

export default StaticCard;
