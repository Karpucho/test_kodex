import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function NavBar() {
  return (
    <div className="navbar">
      <Link to='/singers' className="btn btn-primary" role="button">Певцы</Link>
      <Link to='/songs' className="btn btn-primary" role="button">Песни</Link>
      <Link to='/singers/new' className="btn btn-primary" role="button">Добавить певца</Link>
      <Link to='/songs/new' className="btn btn-primary" role="button">Добавить песню</Link>
    </div>
  );
}

export default NavBar;
