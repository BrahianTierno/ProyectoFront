import React from "react";
import styles from "../style/navBar.module.css";

const Navbar = () => {
  return (
    <nav>
      <h4>Search for deals on hotels, houses and much more✨</h4>
      <div>
        <div>
          <select>
            <option value="0">San Carlos:</option>
            <option value="1">Buenos Aires</option>
            <option value="2">Cordoba</option>
            <option value="3">Mendoza</option>            
          </select>          
        </div>
        <div>
            <input></input>
        </div>        
      </div>
      <button>Buscar</button>
    </nav>
  );
};

export default Navbar;
