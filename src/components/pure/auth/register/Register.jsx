import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../../style/register.css'

const Register = (props) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
        <h2>Crear cuenta</h2>
            <form className='form-registre' onSubmit={handleSubmit}>
                <label className='label-registre1' htmlFor="name">Nombre</label>
                <input className='input-registre1' value={name} type="text" name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Ingrese su nombre" />
                
                <label className='label-registre2' htmlFor="surname">Apellido</label>
                <input className='input-registre2' value={lastName} type="text" name="surname" onChange={(e) => setLastName(e.target.value)} id="surname" placeholder="Ingrese su apellido" />
                
                <label className='label-registre3' htmlFor="email">Correo electrónico</label>
                <input className='input-registre3' value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Ingrese su correo electrónico" id="email" name="email" />
                
                <label className='label-registre4' htmlFor="password">Contraseña</label>
                <input className='input-registre4' value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Ingrese su contraseña" id="password" name="password" />

                <label className='label-registre5' htmlFor="confirmPassword">Confirmar ontraseña</label>
                <input className='input-registre5' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} type="password" placeholder="Repita su contraseña" id="confirmPassword" name="confirmPassword" aria-required/>
                
                <Link to="/Home"><button className='btnRegister' type="submit">Registrarse</button></Link>
            </form>
        <p className='pRegistre' onClick={() => props.onFormSwitch('login')}>¿Ya tienes una cuenta? <Link to="/Login">Iniciar sesión</Link></p>
</div>
    )
}

export default Register