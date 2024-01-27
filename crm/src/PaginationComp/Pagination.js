import React, {useState, useEffect} from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <nav className="navpag mt-3">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <div className="diva">
            <a onClick={() => paginate(number, postsPerPage)} className='page-link'>
              {number}  
            </a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;


// передать в аппорт функц хука для сеткурент и в апорте применять функц при нажатии для перерисовки