import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";



const FooterFilterBar = () => {
    return ( 
        <div className='container'>
            <div className='row  col-12 justify-content-center mt-5 mb-5'>
                <div className='col-1 '>
                    <Link to="/">
                        <p>Real estate  <FaChevronDown /></p>
                    </Link>
                </div>
                <div className='col-1'>
                    <Link to="/">
                        <p>Rentals  <FaChevronDown /></p>
                    </Link>
                </div>
                <div className='col-1'>
                    <Link to="/">
                        <p>Buy Plot  <FaChevronDown /></p>
                    </Link>
                </div>
                <div className='col-1'>
                    <Link to="/">
                        <p>Browse homes  <FaChevronDown /></p>
                    </Link>
                </div>

            </div>
        </div>
     );
}
 
export default FooterFilterBar;