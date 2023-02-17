import React from "react";
import  "../style/navBar.css";
import DatePicker from '../utils/DatePicker'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h4>Busca ofertas en hoteles, casas y mucho más✨</h4>
      <div>
        <div>
          <select>
            <option className="options" defaultValue={""} disabled selected >📌A donde vamos?</option>
            <option value="0">📍Buenos Aires - AR</option>
            <option value="1">📍Medellín - CO</option>
            <option value="2">📍Punta Cana - PR</option>            
            <option value="3">📍New York - EEUU</option>
            <option value="4">📍Punta del Este - UY</option>
            <option value="5">📍Rio de Janeiro - BR</option>
          </select>          
        </div>
        <div className="date-div">
          <DatePicker />
        </div>        
      </div>
      <Link to="/cards"><button className="btnBuscar">Buscar</button></Link>
    </nav>
  );
};

export default Navbar;
