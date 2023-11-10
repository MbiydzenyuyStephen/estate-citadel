import React from "react";
import { Link } from "react-router-dom";
import PlayStoreLogo from "../../assets/play_store.png";
import AppStoreLogo from "../../assets/app_store.png";
import FooterImage from "../../assets/footer-art.svg";
import Logo from '../../assets/logo.png'
import "./footer.css";

const Footer = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-8 mt-5">
        <div className="col-12 mb-3  text-center">
          <div className=""></div>
          <p className="text-justify">
            Zillow Group is committed to ensuring digital accessibility for
            individuals with disabilities. We are continuously working to
            improve the accessibility of our
            <br /> web experience for everyone, and we welcome feedback and
            accommodation requests. If you wish to report an issue or seek an
            accommodation, please
            <br />
            let us know.
          </p>
          <br />
          <p>
            Zillow, Inc. holds real estate brokerage licenses in multiple
            states. Zillow , Inc. holds real estate brokerage licenses in
            multiple provinces.
            <br /> 442-H New York Standard Operating Procedures
            <br /> New York Fair Housing Notice
            <br /> TREC: Information about brokerage services, Consumer
            protection notice
            <br /> California DRE #1522444
            <br />
            <Link to="/">
              <h5>Contact Zillow, Inc. Brokerage</h5>
            </Link>
          </p>
          <br />
          <p>
            For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
            REALTOR® logo are controlled by The Canadian Real Estate Association
            (CREA) and
            <br /> identify real estate professionals who are members of CREA.
            The trademarks MLS®, Multiple Listing Service® and the associated
            logos are owned by CREA
            <br /> and identify the quality of services provided by real estate
            professionals who are members of CREA. Used under license.
          </p>
          <br />
          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center align-items-center">
              {/* <div className="col-6 img-fluid">
                <img className="playstorelogo" src={PlayStoreLogo} alt="" />
              </div>
              <div className="col-6 img-fluid">
                <img className="appstorelogo" src={AppStoreLogo} alt="" />
              </div> */}
            </div>
            {/* <div className="row">
              <a class="navbar-brand col-3">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </a> 
                  Follow us:
            </div> */}

            <div className="col-6  d-flex align-items-center justify-content-center">
              <img src={FooterImage} alt="Footerimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
