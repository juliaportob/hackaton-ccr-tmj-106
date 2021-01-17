import React from "react";
import MenuBar from "../components/MenuBar";
import "../style/settings.css";

function Settings() {
  return (
    <div className="body-settings">
      <MenuBar />
      <h1 className="title-settings">Configurações</h1>
      <button className="btn-change-data">Alterar dados pessoais</button>
      <button className="btn-change-settings">Alterar configurações de tela</button>
      <button className="btn-help-center">Central de ajuda</button>
    </div>
  );
}

export default Settings;
