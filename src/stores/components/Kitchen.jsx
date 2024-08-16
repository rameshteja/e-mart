import React from 'react'
import { kitchenData } from '../data/kitchen';
const Kitchen = () => {
  const firstFiveImages = kitchenData.slice(0,5);
  return (
    <>
      <h2>Kitchen</h2>
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

export default Kitchen
