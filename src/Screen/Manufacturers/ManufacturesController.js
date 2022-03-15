import React, {  Component  } from "react";
import ManufacturesView from './ManufacturesView';
import modelAPI from '../../Model/ModelAPI';
import './manufactures.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            trucks: [],
            cars: [],
            motos: [],
        }
    }

// ANCHOR: Fetching all vehicles
    fetchTrucks = () => {
        modelAPI('caminhoes/marcas').then((res)=> {
            if (res != null) { 
                setTimeout(() => {
                    this.setState({
                        trucks: res.data});
                  }, 1500);
            }
        })
    }
    fetchCars = () => { 
        modelAPI('carros/marcas').then((res)=> {
            if (res != null) { 
              
              setTimeout(() => {
                this.setState({
                    cars: res.data
                })
              }, 1500);
            }
        })
      }
    fetchMotos = () =>   { 
        modelAPI('motos/marcas').then((res)=> {
            if (res != null) { 
              
              setTimeout(() => {
                this.setState({
                    motos: res.data
              })
              }, 1500);
            }
        })
      } 

    componentDidMount() {
        this.fetchTrucks()
        this.fetchMotos()
        this.fetchCars()
    }

    render() {
        // If there are no data
        if (this.state.trucks.length === 0 
            && this.state.motos.length === 0 
            && this.state.cars.length === 0 ) 
            {
            return <div className="loader-card">
                <img src={require('../../Assets/images/loadercar.gif')} />
                 </div>
        } else {
            return <div id="accordion">               
                <ManufacturesView
                Trucks={this.state.trucks}
                motos={this.state.motos}
                cars={this.state.cars}
            />
            </div>
        }

    }
}

export default App;