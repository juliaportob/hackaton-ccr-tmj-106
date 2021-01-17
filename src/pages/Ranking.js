import React from "react";
import { Link } from "react-router-dom";
import avatarJuliana from "../images/avatarJuliana.png";
import avatarCleiton2 from "../images/avatarCleiton2.png";
import logochair from "../images/logochair.png";
import iconmenu from "../images/iconmenu.png";
import "../style/ranking.css";

function Ranking() {
  return (
    <div>
      <div className="body-menu-ranking">
        <Link to="/menu">
          <img className="menu-image" alt="Menu Ícone" src={iconmenu} />
        </Link>
        <img className="avatar-menu" alt="Avatar Empresa" src={logochair} />
      </div>

      <div>
        <h1 className="ranking-title">Jovens indicados para a sua empresa:</h1>

        <div className="div-student">
          <p className="text-student">
            <p className="name-student">Juliana Oliveira</p>
            17 anos, RJ
            <br />
            Pontuação: 900
            <br />
            Perfil: Conciliadora
            <br />
            Ficha completa
          </p>
          <img
            className="avatar-ranking"
            src={avatarJuliana}
            alt="Avatar Juliana"
          />
        </div>

        <div className="div-student">
          <p className="text-student">
            <p className="name-student">Cleiton Alves Jr</p>
            15 anos, RJ
            <br />
            Pontuação: 880
            <br />
            Perfil: Colaborador
            <br />
            Ficha completa
          </p>
          <img
            className="avatar-ranking"
            src={avatarCleiton2}
            alt="Avatar Cleiton"
          />
        </div>
      </div>
    </div>
  );
}

export default Ranking;
