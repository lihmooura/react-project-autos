import {React} from 'react';
import VehicleAcordion from '../../Components/VehicleAccordion';

//ANCHOR : SETTING VEHICLES DATA INITIAL STATE
const VehicleData = [
  { 
    id: 1,
    name: 'Carros',
    vehicle: [  ] 
  },
  {
    id: 2,
    name: 'Motos',
    vehicle: [  ]
  },
  {
    id: 3,
    name: 'Caminhões',
    vehicle: [  ]
  },
]

const ManufacturesView = (vehicle ) => {




    return VehicleData.map((vehicleData, i) => {
      VehicleData[0].vehicle = vehicle.cars
  VehicleData[1].vehicle = vehicle.motos
  VehicleData[2].vehicle = vehicle.Trucks
  return (
    <VehicleAcordion 
        key={i} 
        accordionVehicle={vehicleData} 
        />
        ); 
      }
    )
}

export default ManufacturesView;





