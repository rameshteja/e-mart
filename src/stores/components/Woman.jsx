import React from 'react'
import { womanData } from '../data/woman';
const Woman = () => {
  const firstFiveImages = womanData.slice(0,5);
  return (
    <>
      <h2>Women Fashion</h2>
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

export default Woman
