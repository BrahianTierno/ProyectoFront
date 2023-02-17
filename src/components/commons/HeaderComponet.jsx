import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo from "../../img/logo.jpg";
import "../style/header.css";
import { FiMenu } from "react-icons/fi"
import { FiX } from "react-icons/fi"

const HeaderComponet = () => {

  const [active, setActive] = useState('header-div');
    
  const showHeader = () => {
      setActive('header activeHeader')
  }

  const closeHeader = () => {
      setActive('header-div')
  }

  return (
    <div className="divContainer">
      <div>
        <Link to="/">
          <ul>
            <li>
              <img className="logo" src={logo} alt="logo" width="75" height="55"/>
            </li>
            <li className="liParrafo">
              <p className="parrafo">Sentite como en tu hogar🏠</p>
            </li>
          </ul>
        </Link> 
      </div>
      <div>
        <ul>
          <div className={active}>
            <div className='header-item'>
              <li>            
                <Link to="/Register"><button className="btnReg">Registrarse</button></Link>
            </li>
            <li>
                <Link to="/Login"><button className="btnSignin">Iniciar sesión</button></Link>
            </li>
          </div>
          </div>
        </ul>
        <div onClick={closeHeader} className="close-header">
          <FiX className="icon"/>
        </div>
        <div onClick={showHeader} className="toggle-header">
          <FiMenu className="icon" />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponet;
