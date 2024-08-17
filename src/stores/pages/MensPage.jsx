import React from 'react'
import Navbar from '../components/Navbar';
import { menData } from '../data/men';
const MensPage = () => {
  return (
    <>
      <Navbar />
      <div className='pageSection'>
        {menData.map((item) =>{
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

export default MensPage
