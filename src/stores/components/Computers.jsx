import React from 'react'
import { computerData } from '../data/computers';
const Computers = () => {
  const firstFiveImages = computerData.slice(0,5);
  return (
    <>
      <h2>Computers</h2>
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

export default Computers
