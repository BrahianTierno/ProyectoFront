import React from "react";
import logo from "../../img/logo.jpg";
import styles from "../style/header.module.css";

const HeaderComponet = () => {
  return (
    <div className={styles.divContainer}>
      <div>
        <ul>
          <li>
            <img src={logo} alt="Girl in a jacket" width="75" height="55" />
          </li>
          <li className={styles.liParrafo }>
            <p>Sentite como en tu hogar</p>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <button>Registrarse</button>
          </li>
          <li>
            <button>Iniciar sesión</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponet;
