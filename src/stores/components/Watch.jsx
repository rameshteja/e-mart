import React from 'react'
import { watchData } from '../data/watch';

const Watch = () => {
  const firstFiveImages = watchData.slice(0,5);
  return (
    <>
      <h2>Watchs</h2>
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

export default Watch
