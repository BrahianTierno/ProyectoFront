import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../../style/login.css'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main>
                <div className='div-form'>
                    <h2>Iniciar sesión</h2>
                    <form className='form-login' onSubmit={handleSubmit}>
                        <label className='label-mail' htmlFor="email">Correo electrónico</label>

                        <input className='input-mail' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Ingrese su email' id='email' name='email' />
                        
                        <label className='label-pass' htmlFor="password">Contraseña</label>
                        
                        <input className='input-pass' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='********' id='password' name='password' />
                        
                        <Link to="/Home"><button className='btn-form'>Ingresar</button></Link>
                    </form>
                    <p className='pLogin' onClick={() => props.onFormSwitch('register')}>¿Aún no tienes cuenta?<Link to="/Register"> Registrate</Link></p>
                </div>
        </main>
    )
}

export default Login