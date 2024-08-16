import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="navSection">
          <div className="title">
            <h2>E - Mart</h2>
          </div>
          <div className="search">
            <input type="text" placeholder='search...' />
          </div>
          <div className="user">
            <div className="user-detail">SignIN/SignUp</div>
          </div>
          <div className="cart">Cart</div>
      </div>
      <div className="subMenu">
        <ul>
          <li>Mobiles</li>
          <li>Computer</li>
          <li>Watches</li>
          <li>Men Wear</li>
          <li>Women Wear</li>
          <li>Furniture</li>
          <li>Ac</li>
          <li>Kitchen</li>
          <li>Books</li>
          <li>Fridge</li>
          <li>Speakers</li>
          <li>TV`s</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
