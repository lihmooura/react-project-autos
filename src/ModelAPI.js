import axios from 'axios'; 

const getDataFromAPI = (endpoint) => {
    return axios.get(`${endpoint}/marcas`).then((res) => { 
        return res
    }).catch((error) => { 
        console.log(error)
       return null 
       
    })
  };
  
  export default getDataFromAPI;
  