import React, { useEffect } from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
import { useHistory } from 'react-router-dom';
function Banner() {
  const history = useHistory()

//   useEffect(() => {
//     const token = localStorage.getItem('token');
 

//     if (token) {
//         history.push('/home')
//     }
// },[])

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;