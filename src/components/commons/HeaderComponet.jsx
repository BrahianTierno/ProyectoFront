import React from "react";
import logo from "../../img/logo.jpg";
import styles from "../style/header.module.css";

const HeaderComponet = () => {
  return (
    <div className={styles.divContainer}>
      <div>
        <ul>
          <li>
            <img src={logo} alt="logo" width="75" height="55" />
          </li>
          <li className={styles.liParrafo }>
            <p>Sentite como en tu hogar🏠</p>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <button className={styles.btnReg}>Registrarse</button>
          </li>
          <li>
            <button className={styles.btnSignin}>Iniciar sesión</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponet;
