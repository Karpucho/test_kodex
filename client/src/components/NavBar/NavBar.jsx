import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function NavBar(props) {
  return (
    <div className="navbar">
      <Link to='/singers'><button className="navbar_btn">Певцы</button></Link>
      <Link to='/songs'><button className="navbar_btn">Песни</button></Link>
      <Link to='/singers/new'><button className="navbar_btn">Добавить певца</button></Link>
      <Link to='/songs/new'><button className="navbar_btn">Добавить песню</button></Link>
    </div>
  );
}

export default NavBar;
