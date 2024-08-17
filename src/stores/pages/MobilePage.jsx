import React, { useState } from 'react'
import { mobileData } from '../data/mobiles';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const MobilePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const companyHandler = (data) => {
    if (selectedProduct.includes(data)) {
      setSelectedProduct(selectedProduct.filter(item => item !== data));
    } else {
      setSelectedProduct([...selectedProduct, data]);
    }
  };
  const filteredProducts = selectedProduct.length === 0 ? 
  mobileData : mobileData.filter((item) => selectedProduct.includes(item.company));
  return (
    <>
      <Navbar />
      <div className="fullPage">
        <div className="pro-selected">
          {mobileData.map((mobile) => {
            return (
              <div className='pro-input' key={mobile.id}>
                <label htmlFor="">
                  <input type="checkbox" name="" id="" 
                    checked={selectedProduct.includes(mobile.company)}
                    onChange={() => companyHandler(mobile.company)}
                  />
                  {mobile.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className='pageSection'>
          {filteredProducts.map((item) =>{
            return (
              <div key={item.id}>
                <Link to={`/mobiles/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt=''/>
                  </div>
                </Link>
                <div className="proModel">
                  {item.company}, {item.model}
                </div>
              </div>
            );
          } )}
        </div> 
      </div>
    </>
  )
}

export default MobilePage
