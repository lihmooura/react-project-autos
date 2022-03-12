import React, {  Component  } from "react";
import ManufacturesView from './ManufacturesView';
import modelAPI from '../../ModelAPI'
import './manufactures.css'


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
        modelAPI('caminhoes').then((res)=> {
            if (res != null) { 
            this.setState({
                trucks: res.data});
            }
        })
    }
    fetchCars = () => { 
        modelAPI('carros').then((res)=> {
            if (res != null) { 
              this.setState({
                  cars: res.data
              });
            }
        })
      }
    fetchMotos = () =>   { 
        modelAPI('motos').then((res)=> {
            if (res != null) { 
                this.setState({
                    motos: res.data
              });
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
        if (this.state.trucks.length === 0 && this.state.motos.length === 0 && this.state.cars.length === 0 ) {
            return <div className="loader-card">
                <img src={require('../../Assets/images/loadercar.gif')} />
                 </div>
        } else {
            return <div id="accordion">
                <ManufacturesView
                Trucks={this.state.trucks}
                motos={this.state.cars}
                cars={this.state.motos}
            />
            </div>
        }

    }
}

export default App;