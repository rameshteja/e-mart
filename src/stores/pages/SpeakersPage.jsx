import React from 'react';
import Navbar from '../components/Navbar';
import {speakerData} from '../data/speaker';
const SpeakersPage = () => {
  return (
    <>
      <Navbar />
      <div className='pageSection'>
        {speakerData.map((item) =>{
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

export default SpeakersPage
