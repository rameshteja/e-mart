import React from 'react';
import Navbar from '../components/Navbar';
import {booksData} from '../data/books';
const BooksPage = () => {
  return (
    <>
      <Navbar />
      <div className='pageSection'>
        {booksData.map((item) =>{
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

export default BooksPage
