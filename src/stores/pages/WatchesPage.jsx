import React from 'react'
import Navbar from '../components/Navbar';
import { watchData } from '../data/watch';
const WatchesPage = () => {
  return (
    <>
      <Navbar />
      <div className='pageSection'>
        {watchData.map((item) =>{
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

export default WatchesPage
