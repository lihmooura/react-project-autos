import {React, useEffect, useState} from 'react';
import ManufacturesView from '../../Screen/Manufacturers/ManufacturesView';
import modelAPI from '../../ModelAPI'

function App() {

  //ANCHOR : Vehicles fetched states
    const [Trucks, setTrucks] = useState([]);
    const [cars, setCars] = useState([]);
    const [motos, setMotos] = useState([]);


  //ANCHOR  Fetching vehicles by model
    function fetchTrucks()  { 
        modelAPI('caminhoes').then((res)=> {
            if (res != null) { 
            setTrucks(res.data);
            }
        })
    }
    function fetchCars()  { 
      modelAPI('carros').then((res)=> {
          if (res != null) { 
            setCars(res.data);
          }
      })
    }
    function fetchMotos()  { 
      modelAPI('motos').then((res)=> {
          if (res != null) { 
            setMotos(res.data);
          }
      })
    }

useEffect(() => {
    fetchTrucks()
    fetchCars()
    fetchMotos()
  }, []);
 
    return (
            <ManufacturesView
                Trucks={Trucks}
                motos={motos}
                cars={cars}
            />
    )


}

export default App;