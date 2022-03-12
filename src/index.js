import React from 'react';
import ReactDOM from 'react-dom';
import App from './Screen/Manufacturers/ManufacturesController'
import axios from 'axios';
import NavBar from './Components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Global.css'

//ANCHOR : Setting axios base URL
axios.defaults.baseURL = 'https://parallelum.com.br/fipe/api/v1/';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
 <div className='App'>
   <App />
 </div>
  </React.StrictMode>,
  document.getElementById('root')
);
