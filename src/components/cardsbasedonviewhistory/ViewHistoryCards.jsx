import React from 'react';
import Card from '../card/card';


const ViewHistoryCards = () => {
    return ( 
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="row mt-5 mb-5">
              <h2>Homes For You</h2>
              <h6>Based on your view history</h6>
              <div className="col-12 col-lg-4 d-flex justify-content-center searchcards">
                <Card />
              </div>
              <div className="col-12 col-lg-4 d-flex justify-content-center searchcards">
                <Card />
              </div>
              <div className="col-12 col-lg-2 d-flex justify-content-center searchcards">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default ViewHistoryCards;