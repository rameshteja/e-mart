import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import Women from './Woman'
import Furniture from './Furniture'
import Men from './Men';
import Watch from './Watch';
import Ac from './Ac';
import Kitchen from './Kitchen'

const Products = () => {
  return (
    <div>
      <Mobiles />
      <Computers />
      <Watch />
      <Men />
      <Women />
      <Ac />
      <Furniture /> 
      <Kitchen />
    </div>
  )
}

export default Products
