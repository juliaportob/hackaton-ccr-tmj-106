import React from "react";
import itauLogo from "../images/itauLogo.jpg";
import petrobrasLogo from "../images/petrobrasLogo.png";
import idrinkLogo from "../images/idrinkLogo.png";
import fiftynineLogo from "../images/fiftynineLogo.jpg";
import MenuBar from "../components/MenuBar";
import "../style/selection-process.css";

function SelectionProcess() {
  return (
    <div>
      <MenuBar />
      <div className="body-selec-process">
        <h1 className="title-selec-process">Processos seletivos</h1>

        <div className="divs-selec-process">
          <h3>Programa Jovem Aprendiz Itaú</h3>
          <img className="image-selec-process" src={itauLogo} alt="Logo Itaú" />
          <br />
          <a
            className="info-selec-process"
            href="https://www.itau.com.br/trabalhe-conosco/jovem-aprendiz/"
          >
            Mais informações
          </a>
        </div>

        <div className="divs-selec-process">
          <h3>Programa Jovem Aprendiz Petrobras</h3>
          <img className="image-selec-process" src={petrobrasLogo} alt="Logo Petrobras" />
          <br />
          <a
            className="info-selec-process"
            href="https://petrobras.com.br/pt/quem-somos/carreiras/jovem-aprendiz/"
          >
            Mais informações
          </a>
        </div>

        <div className="divs-selec-process">
          <h3>Programa Jovem Aprendiz iDrink - Exclusivo Me Emprega Aí</h3>
          <img className="image-selec-process" src={idrinkLogo} alt="Logo iDrink" />
          <br />
          <p className="info-selec-process">Mais informações</p>
        </div>

        <h1 className="subtitle-selec-process">Meus processos seletivos</h1>

        <div className="divs-selec-process">
          <h3>Programa Jovem Aprendiz 59 Pop - Exclusivo Me Emprega Aí</h3>
          <img className="image-selec-process" src={fiftynineLogo} alt="Logo 59" />
          <br />
          <p className="info-selec-process">Mais informações</p>
        </div>
      </div>
    </div>
  );
}

export default SelectionProcess;
