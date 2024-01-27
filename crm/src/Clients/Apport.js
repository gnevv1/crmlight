import React, { useState} from 'react';
import "../PaginationComp/Pag.css";
import Pagination from '../PaginationComp/Pagination';

const Apport = (clients_data) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(25);
         
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const data_for_current_page = clients_data['clients_data'].slice(indexOfFirstPost, indexOfLastPost);
    
    
    // Change page
    const paginate = pageNumber => {
      setCurrentPage(pageNumber);
      {console.log(pageNumber)}
    }
    console.log(currentPage);

    return (
      <div className='container'>
          <Pagination
          postsPerPage={postsPerPage}
          totalPosts={clients_data["clients_data"].length}
          paginate={paginate}
          />
      </div>
    );
    
  };
  

  export default Apport;
  // export const data_for_current_page;
  