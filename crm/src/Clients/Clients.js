import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu.js";
import Pagination from '../PaginationComp/Pagination';
import clients_data from './Clients.css';
import Hamburger from '../Hamburger/Hamburger.js'; 

function Clients() {

    const [clients_data, get_clients_data] = useState(); //передаем в useState пустой массив, что бы map работал без ошибок.
    const [data_of_current_page, set_data_for_current_page] = useState();
    useEffect(() => {
        fetch("http://localhost:4444/") //отправляем запрос по адресу сервера
            .then(response => response.json())
            .then((response) => {
                get_clients_data(response)
            }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

    const paginate = (pageNumber, postsPerPage)=> {
        setCurrentPage(pageNumber);
        const indexOfLastPost = pageNumber * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        set_data_for_current_page(clients_data.slice(indexOfFirstPost, indexOfLastPost));
      }
      
      console.log(data_of_current_page)

    function RightBar() {

        console.log('dadd')

        const element = <h1>Hello, world</h1>;
           
        }
      
    return (

        <div className="container col">

            <table className="table table-hover table-bordered">
                
                <tbody >
                
                <tr  className="table-primary">
                        {data_of_current_page && Object.keys(data_of_current_page.at(0)).map((column_name) => {
                            return <th key={column_name} className="col">{column_name}</th>
                        }
                        )}
                    </tr>
                    {data_of_current_page && data_of_current_page.map((item, index) => {
                        return ( <tr key={index} className="table-primary">
                            {Object.values(item).map((values, index) => {
                                return <td onClick={RightBar} key={index}> {values}</td>
                            })}
                        </tr>)

                    })}
      
                </tbody>
                

            </table>
            {/* {clients_data && <Apport 
            clients_data={clients_data}/>} */}
            
            {clients_data && <Pagination
          postsPerPage={postsPerPage}
          totalPosts={clients_data.length}
          paginate={paginate}
          /> }

        </div>
    )
}



export default Clients;