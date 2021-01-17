import React from "react";
import { Link } from "react-router-dom";
import iconconfig from "../images/iconconfig.png";
import icondepoim from "../images/icondepoim.png";
import iconperfil from "../images/iconperfil.png";
import iconprocselec from "../images/iconprocselec.png";
import icontest from "../images/icontest.png";
import iconcurso from "../images/iconcurso.png";
import MenuBar from "../components/MenuBar";
import "../style/menupage.css";

function MenuPage() {
  return (
    <div>
      <MenuBar />
      <h1 className="menu-title">Menu</h1>
      <div className="divs-menu">
        <Link to="/cursos">
          <img alt="Cursos Ícone" src={iconcurso} />
        </Link>
        <Link to="/processos-seletivos">
          <img alt="Processos Seletivos Ícone" src={iconprocselec} />
        </Link>
      </div>

      <div className="divs-menu">
        <Link to="/teste">
          <img alt="Testes Ícone" src={icontest} />
        </Link>
        <Link to="/depoimentos">
          <img alt="Depoimentos Ícone" src={icondepoim} />
        </Link>
      </div>

      <div className="divs-menu">
        <Link to="/configuracoes">
          <img alt="Configurações Ícone" src={iconconfig} />
        </Link>
        <Link to="/perfil">
          <img className="profile-icon" alt="Perfil Ícone" src={iconperfil} />
        </Link>
      </div>

      <div className="divs-menu button-logout">
        <Link to="/">
          <h2>Sair</h2>
        </Link>
      </div>
    </div>
  );
}

export default MenuPage;
