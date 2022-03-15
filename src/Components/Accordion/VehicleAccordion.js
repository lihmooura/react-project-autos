import {React, useState} from 'react';
import {Link} from 'react-router-dom'
import Pagination from '../Pagination';
import './accordion.css';
import SearchBox from '../SearchField';

const ManufacturesView = ({ accordionVehicle }) => {
  

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchfield, setSearch] = useState("");


// ANCHOR : SEARCHFIELD 
  const filteredItems = accordionVehicle.vehicle.filter(elem => {
    return elem.nome.toLowerCase().includes(searchfield.toLowerCase());
})
  function onSearchChange(event){
    setSearch(event.target.value)
  }

// ANCHOR: PAGINATION 
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = filteredItems.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        
        <button 
          className="accordion-button" data-toggle="collapse" 
          data-target={`#${accordionVehicle.id}`}  aria-expanded="true" 
          aria-controls={`${accordionVehicle.id}`}>
          {accordionVehicle.name}
        </button>
        
      </h5>
    </div>

    <div id={`${accordionVehicle.id}`} className="collapse" 
    aria-labelledby={`${accordionVehicle.id}`} data-parent="#accordion">

    <div className="card-body">
        <SearchBox searchchange = { onSearchChange }/>
        { currentPosts.map((v, i) => { 
          return <Link key={i} to={`/vehicles/${v.codigo}/${accordionVehicle.name.toLowerCase()}`} className='regular-text link accordion-inner-btn'> <p> {v.nome} </p> </Link>
  

          })
        }
    </div>

      <div className='paginate'>
      <Pagination 
      postsPerPage={itemsPerPage} 
      totalPosts={filteredItems.length}
      paginate={paginate}
       />
       </div>
    </div>
  </div>
  
    )
}

export default ManufacturesView;