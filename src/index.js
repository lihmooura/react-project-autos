import React from 'react';
import ReactDOM from 'react-dom';
import ManufacturesController from './Screen/Manufacturers/ManufacturesController';
import axios from 'axios'

axios.defaults.baseURL = 'https://parallelum.com.br/fipe/api/v1/carros/';

ReactDOM.render(
  <React.StrictMode>
 <div>
   <ManufacturesController />
 </div>
  </React.StrictMode>,
  document.getElementById('root')
);
