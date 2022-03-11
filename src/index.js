import React from 'react';
import ReactDOM from 'react-dom';
import ManufactureController from './Screen/Manufacturers/ManufacturesController';
import axios from 'axios';
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

//ANCHOR : Setting axios base URL
axios.defaults.baseURL = 'https://parallelum.com.br/fipe/api/v1/';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
 <div>
   <ManufactureController />
 </div>
  </React.StrictMode>,
  document.getElementById('root')
);
