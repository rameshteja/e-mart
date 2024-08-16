import React from 'react'
import { mobileData } from '../data/mobiles';

const Mobiles = () => {
  const firstFiveImages = mobileData.slice(0,5);
  return (
    <>
      <h2>Mobiles</h2>
      <div className='proSection'>
        {
          firstFiveImages.map((item) => {
            return(
              <div className='imgBoc' key={item.id}>
                <img className='proImg' src={item.image} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Mobiles
