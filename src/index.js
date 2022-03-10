import React from 'react';
import ReactDOM from 'react-dom';
import ManufacturesController from './Screen/Manufacturers/ManufacturesController';
import axios from 'axios';
import NavBar from './Components/NavBar'

axios.defaults.baseURL = 'https://parallelum.com.br/fipe/api/v1/carros/';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
 <div>
   <ManufacturesController />
 </div>
  </React.StrictMode>,
  document.getElementById('root')
);
