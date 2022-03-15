import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import getDataFromAPI from '../../Model/ModelAPI'
import VehicleView from './VehicleView';



const VehiclesModels  = () => {
            const { codigo } = useParams()
            const { vehicle } = useParams()
            const [vehicleList, setVehicleList] = useState([]);
            

            function fetchData(e) { 
               let data = getDataFromAPI(e)
               data.then((res) => { 
                sortData(res.data.modelos)
               })
            }

            function sortData(data) { 
                data.sort(function(a, b){
                    if(a.nome > b.nome) { return -1; }
                    if(a.nome < b.nome) { return 1; }
                    return 0;
                })
                setVehicleList(data)
            }

            useEffect(() => {
                const newvehicle = vehicle.replace("õ", "o")     
                fetchData(`${newvehicle}/marcas/${codigo}/modelos`)
                
            }, []);
              
           return <div>
              {
            vehicleList.length !== 0 ? 
                <VehicleView models={vehicleList}  /> 
             : <h3 className='semibold large-text'>loading...</h3>
               }
           </div>
            }
                           

export default VehiclesModels;