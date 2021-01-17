import React from "react";
import picbruna from "../images/picbruna.jpeg";
import timeline from "../images/timeline.png";
import MenuBar from "../components/MenuBar";
import "../style/testimonies.css";

function Testimonies() {
  return (
    <div className="div-testimonies">
      <MenuBar />
      <h1 className="title-testimonies">Depoimentos</h1>
      <img className="avatar-testimonies" src={picbruna} alt="Avatar Bruna" />

      <div className="timeline-testimonies">
        <h3 className="title-name">
          Bruna Bazhuni
          <br />
          21 anos
        </h3>
        <img src={timeline} alt="Linha do tempo empregatícia" />
        <div className="job-experience">
          <p className="fisrt-job">
            Jovem
            <br />
            Aprendiz
            <br />
            2019
          </p>

          <p className="second-job">
            Auxiliar
            <br />
            Financeiro
            <br />
            2020
          </p>

          <p className="third-job">
            Continua
            <br />
            Empregada
            <br />
            2021
          </p>
        </div>
      </div>

      <div className="body-testimonies">
        <div className="div-testimony-history">
          <p className="testimony">
            Como ex participante do programa de aprendizagem, posso dizer que é
            uma medida muito necessária para os jovens, principalmente para
            aqueles que não possuem experiência profissional ainda, como foi o
            meu caso quando comecei. O programa dá espaço para que o jovem se
            insira no mercado de trabalho com o intuito de aprender o
            funcionamento de empresas, processos administrativos ou de vendas,
            proporcionando assim oportunidades que normalmente seriam negadas a
            esse grupo específico. Com isso, eu pude ter total noção dos
            procedimentos corporativos, construir minha postura profissional e
            aprender vários processos técnicos, os quais são triviais para
            inúmeras vagas de emprego. Ao longo do tempo, pude aprender coisas
            novas a todo momento, além de mostrar interesse em aprender mais
            ainda, exercitando a proatividade. No final do meu contrato, então,
            acabei conquistando meu maior objetivo: fui efetivada. Hoje posso
            dizer que todo meu esforço a procura de um emprego de jovem aprendiz
            valeu a pena, assim como todos os erros que cometi no meu processo
            de aprendizagem, pois foi com eles que eu aprendia cada vez mais;
            errar é necessário. O programa jovem aprendiz me fez ser a
            profissional que sou hoje. Ele é uma enorme oportunidade para todos
            os jovens que desejam se inserir no mercado de trabalho ou adquirir
            mais experiência.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
