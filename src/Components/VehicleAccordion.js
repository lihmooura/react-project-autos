import React from 'react';

const ManufacturesView = ({ accordionVehicle }) => {
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
          accordionVehicle.vehicle.map((v, i) => { 
          return <p key={i}>{v.nome}</p>
          })
        }

      </div>
    </div>
  </div>
  
    )
}

export default ManufacturesView;