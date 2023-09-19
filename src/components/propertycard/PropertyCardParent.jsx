import rentImage from "../../assets/rent_image_property_card.png";
import buyImage from "../../assets/buy_image_property_card.png";
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
                  most listings, including things you won’t find anywhere else`,
    button:"Browse houses"                  
  };

  return (
    <div>
      <PropertyCardChild object={rentalspropertycard} />
      <PropertyCardChild object={buypropertycard} />

      //Sir lines 24 and 25 are duplicating in the browser 
    </div>
  );
};

export default PropertyCardParent;

// <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-8">
//           <div className="row mt-5 mb-5">
//             <div className="col-12 col-lg-4 d-flex justify-content-center property-cards">
//               <div className="card shadow">
//                 <img
//                   src={RentImageParent}
//                   alt="cardimage1"
//                   className="card-img-top"
//                 />
//                 <div className="card-body">
//                   <h2 className="card-title">Rent a house</h2>
//                   <p className="card-text">
//                     We’re creating a seamless online experience – from shopping
//                     on the largest rental network, to applying, to paying rent.
//                   </p>
//                   <div className="static-card-button">
//                     <Button className="btn btn-link">Find rentals</Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 col-lg-4 d-flex justify-content-center property-cards">
//               <div className="card shadow">
//                 <img
//                   src={BuyImagePropertyCard}
//                   alt="cardimage1"
//                   className="card-img-top"
//                 />
//                 <div className="card-body">
//                   <h2 className="card-title">Buy a house</h2>
//                   <p className="card-text">
//                     Find your place with an immersive photo experience and the
//                     most listings, including things you won’t find anywhere else
//                   </p>
//                   <Link to="/renthouse">
//                   <div className="static-card-button">
//                     <Button className="btn btn-link">Browse houses</Button>
//                   </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 col-lg-4 d-flex justify-content-center property-cards">
//               <div className="card shadow">
//                 <img
//                   src={SaleImagePropertyCard}
//                   alt="cardimage1"
//                   className="card-img-top"
//                 />
//                 <div className="card-body">
//                   <h2 className="card-title">Sale a house</h2>
//                   <p className="card-text">
//                     No matter what path you take to sell your home, we can help
//                     you navigate a successful sale.
//                   </p>
//                   <div className="static-card-button">
//                     <Button className="btn btn-link">See your optons</Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
