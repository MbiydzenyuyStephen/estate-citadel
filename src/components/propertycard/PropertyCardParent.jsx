import rentImage from "../../assets/rent_image_property_card.png";
import buyImage from "../../assets/buy_image_property_card.png";
import saleImage from "../../assets/sale_image_property_card.png";
import PropertyCardChild from "./PropertyCardChild";
import "./propertycard.css";

const PropertyCardParent = () => {
  const rentalspropertycard = {
    image: rentImage,
    title: "Rent a house",
    description: `We are creating a seamless online experience from shopping
                  on the largest rental network to applying to paying rent.`,
    button: "Find rentals"
  };
  const buypropertycard = {
    image: buyImage,
    title: "Buy a house",
    description: `Find your place with an immersive photo experience and the
                  most listings, including things you won't find anywhere else`,
    button: "Browse houses"
  };

  const salepropertycard = {
    image: saleImage,
    title: "Sale a house",
    description: `No matter what path you take to sell your home, we can help
                  you navigate a successful sale.`,
    button: "See your options"
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="row mt-5 mb-5">
            <div className="col-12 col-lg-4 d-flex justify-content-center property-cards">
              <PropertyCardChild object={rentalspropertycard} />
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center property-cards">
              <PropertyCardChild object={buypropertycard} />
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center property-cards">
              <PropertyCardChild object={salepropertycard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardParent;
