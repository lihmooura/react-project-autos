import axios from 'axios'; 

const getDataFromAPI = (endpoint) => {
    console.log("endpoint", endpoint)
    return axios.get(`${endpoint}`).then((res) => { 
        return res
    }).catch((error) => { 
        console.log(error)
       return null 
       
    })
  };
  

  export default getDataFromAPI;
  