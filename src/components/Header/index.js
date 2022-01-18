import React from "react";
import './style.css'

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="#">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix"/>
        </a>
      </div>
      <div className="header--user">
        <a href="#">
          <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="Usuário" />
        </a>
      </div>
    </header>
  );
}