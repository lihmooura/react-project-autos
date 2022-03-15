import React from 'react';
import VehicleAcordion from '../../Components/Accordion/VehicleAccordion';
import './vehicleView.css'
import { useParams } from 'react-router-dom';

const VehicleData = [
    { 
      id: 1,
      name: 'Carros',
      vehicle: [  ] 
    }
]

  const VehicleView = (models) => {
    const { vehicle } = useParams()
        VehicleData[0].vehicle = models.models
        VehicleData[0].name = vehicle
        console.log("VehicleData", VehicleData[0])
    return ( 
        <div className='vehicleView'>
            {
                <VehicleAcordion 
                accordionVehicle={VehicleData[0]} 
                />
           
            }
        </div>
    )
  }
  
  export default VehicleView;