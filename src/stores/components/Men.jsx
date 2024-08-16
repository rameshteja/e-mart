import React from 'react'
import { menData } from '../data/men';
const Men = () => {
  const firstFiveImages = menData.slice(0,5);
  return (
    <>
      <h2>Man Fashion</h2>
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

export default Men
