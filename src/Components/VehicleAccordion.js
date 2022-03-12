import {React, useState} from 'react';
import Pagination from '../Components/Pagination';

const ManufacturesView = ({ accordionVehicle }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

    // Get current posts
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = accordionVehicle.vehicle.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target={`#${accordionVehicle.id}`}  aria-expanded="true" aria-controls={`${accordionVehicle.id}`}>
          {accordionVehicle.name}
        </button>
      </h5>
    </div>

    <div id={`${accordionVehicle.id}`} className="collapse" aria-labelledby={`${accordionVehicle.id}`} data-parent="#accordion">
      <div className="card-body">
        {
          currentPosts.map((v, i) => { 
          return <p key={i}>{v.nome}</p>
          })
          
        }
   
      </div>
      <Pagination 
      postsPerPage={itemsPerPage} 
      totalPosts={accordionVehicle.vehicle.length}
      paginate={paginate}
       />
    </div>
  </div>
  
    )
}

export default ManufacturesView;