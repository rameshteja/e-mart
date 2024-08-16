import React from 'react'
import { acData } from '../data/ac';
const Ac = () => {
  const firstFiveImages = acData.slice(0,5);
  return (
    <>
      <h2>Ac</h2>
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

export default Ac
