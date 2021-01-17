import React from "react";
import { Link } from "react-router-dom";
import iconmenu from "../images/iconmenu.png";
import '../style/companies.css';

function Companies() {
  return (
    <div className="body-companies">
      <div className="body-menu">
        <Link to="/menu">
          <img className="menu-image" alt="Menu ícone" src={iconmenu} />
        </Link>
      </div>
      <h1 className="title-companies">Empresas</h1>

      <Link to="/ranking">
        <button className="btn-partner">Já sou uma empresa parceira</button>
      </Link>

      <Link to="/cadastro-empresas">
        <button className="btn-register">Quero ser uma empresa parceira</button>
      </Link>
    </div>
  );
}

export default Companies;
