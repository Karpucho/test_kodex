import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <Link to='/singers' className="nav-link">Певцы</Link>
              <Link to='/songs' className="nav-link">Песни</Link>
              <Link to='/singers/new' className="nav-link">Добавить певца</Link>
              <Link to='/songs/new' className="nav-link">Добавить песню</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
