import React from "react";
import { getUser, getScoreValue } from "../services/localStorage";
import "../style/profile.css";
import MenuBar from "../components/MenuBar";
import scoreLine from "../images/scoreLine.png";
import abilities from "../images/abilities.png";
import avatarCleiton from "../images/avatarCleiton.png";

function Profile() {
  return (
    <div>
      <MenuBar />
      <div className="body-profile">
        <h1>Perfil</h1>
        <div>
          <img className="avatar" alt="Avatar Cleiton" src={avatarCleiton} />
        </div>

        <div>
          <p className=" user-name paragraph">{getUser("user")}</p>
        </div>

        <div>
          <p className="paragraph">15 anos, MG</p>
        </div>

        <div>
          <h3>Pontuação: {getScoreValue("score")}</h3>
        </div>

        <img src={scoreLine} alt="Pontuação" />

        <h3>Habilidades</h3>
        <img
          className="abilities"
          src={abilities}
          alt="Quadro de Habilidades"
        />
      </div>
    </div>
  );
}

export default Profile;
