import React from 'react';
import './Header.css'
import logo from '../logoadoptme.png'
import { Link } from 'react-router-dom'




function Header(props) {
  
  return (
    <section>
      <section className='navbar'>
        
        {/* logo de adoptme */}
        <Link to={'/'}> <img src={logo} className="logo" alt='logo'></img></Link>
       
        {/* Menú de navegación */}
        <nav className="Principal">
              <Link to={'/registro'} className="NavPrimary">Registrarme</Link>
              <Link to={'/'}>Iniciar sesión</Link>
              <a href="Adoptar.html">Adoptar</a>
              <a href="Nosotros.html">Sobre nosotros</a>
              <a href="Contacto.html">Contacto</a>
              <Link to={'/Mipanel'}>Mi Panel</Link>
          </nav>
      </section>

      <section className='Presentacion'>
            <header>
              <h3>{props.texto1}</h3>
              <h1>{props.texto2}</h1>
            </header>
            <section>
              <p>No compres la felicidad, adopta</p>
            </section>
        </section>
    </section>
    

  );
}

export default Header;