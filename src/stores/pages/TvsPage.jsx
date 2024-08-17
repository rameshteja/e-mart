import React from 'react';
import Navbar from '../components/Navbar';
import {tvData} from '../data/tv';
const TvsPage = () => {
  return (
    <>
      <Navbar />
      <div className='pageSection'>
        {tvData.map((item) =>{
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

export default TvsPage
