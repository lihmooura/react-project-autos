import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ManufacturesController from './Screen/Manufacturers/ManufacturesController'
import axios from 'axios';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Global.css';
import './index.css';
import VehicleController from './Screen/Vehicle/VehicleController'

//ANCHOR : Setting axios base URL
axios.defaults.baseURL = 'https://parallelum.com.br/fipe/api/v1/';


function App() {
  return (
    <Router>
    <div className="App">
  
  <NavBar />
    <Switch>
    <Route exact path="/">
        <ManufacturesController />
    </Route>
    <Route exact path="/vehicles/:codigo/:vehicle">
        <VehicleController />
    </Route>
</Switch>
  
     </div>
     </Router>
  );
}

export default App;