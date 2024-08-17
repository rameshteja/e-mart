import React from 'react';
import Navbar from '../components/Navbar';
import { furnitureData } from '../data/furniture';
const FurniturePage = () => {
  return (
    <>
      <Navbar />
      <div className='pageSection'>
        {furnitureData.map((item) =>{
          return (
            <div key={item.id}>
              <div className="pageImg">
                <img src={item.image} alt=''/>
              </div>
              <div className="proModel">
                {item.company}, {item.model}
              </div>
            </div>
          );
        } )}
      </div> 
    </>
  )
}

export default FurniturePage
