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
    if (vehicle.Trucks.length === 0 && vehicle.cars.length === 0  && vehicle.motos.length === 0 ) { 
      return (<div>  Loading ... </div>)
    } else {
      VehicleData[0].vehicle = vehicle.cars
      VehicleData[1].vehicle = vehicle.motos
      VehicleData[2].vehicle = vehicle.Trucks

      return (
        <div id="accordion"> 
      { VehicleData.map((vehicleData, i) => {
          return (
          <VehicleAcordion 
              key={i} 
              accordionVehicle={vehicleData} 
              />
              );
          })
      }
  </div>
          );
    }
}

export default ManufacturesView;