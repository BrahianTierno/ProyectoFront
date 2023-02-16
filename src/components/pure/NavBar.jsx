import React from "react";
import styles from "../style/navBar.module.css";

const Navbar = () => {
  return (
    <nav>
      <h4>Busca ofertas en hoteles, casas y mucho más✨</h4>
      <div>
        <div>
          <select>
            <option className={styles.options} value="" disabled selected >📌A donde vamos?</option>
            <option value="0">📍Buenos Aires - AR</option>
            <option value="1">📍Medellín - CO</option>
            <option value="2">📍Punta Cana - PR</option>            
            <option value="3">📍New York - EEUU</option>
            <option value="4">📍Punta del Este - UY</option>
            <option value="5">📍Rio de Janeiro - BR</option>
          </select>          
        </div>
        <div>
            <label className={styles.checkInLabel} htmlFor="text">Check-In</label>
            <input className={styles.checkIn} type="date" ></input>
            <label className={styles.checkOutLabel} htmlFor="text">Check-Out</label>
            <input className={styles.checkOut} type="date" ></input>
        </div>        
      </div>
      <button className={styles.btnBuscar}>Buscar</button>
    </nav>
  );
};

export default Navbar;
