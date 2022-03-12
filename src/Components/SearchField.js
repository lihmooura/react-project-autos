
import React from "react";


const SearchBox = ({ searchchange}) =>{
    return (
<div className="form-group">  
          <input type="text" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="Buscar Vehiculo"
          onChange= {searchchange}
          />
      </div>
    );
}

export default SearchBox;