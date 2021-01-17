import React from 'react';
import { Link } from 'react-router-dom';
import iconmenu from '../images/iconmenu.png';
import avatarCleiton from "../images/avatarCleiton.png";
import '../style/menubar.css';

function MenuBar() {
  return (
    <div className="body-menu">
      <Link to="/menu">
          <img className="menu-image" alt="Menu ícone" src={iconmenu} />
      </Link>
      <img className="avatar-menu" alt="Avatar usuário" src={avatarCleiton}/>
    </div>
  );
}

export default MenuBar;
