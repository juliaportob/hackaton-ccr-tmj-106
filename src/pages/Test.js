import React from "react";
import MenuBar from "../components/MenuBar";
import "../style/test.css";

function Test() {
  return (
    <div>
      <MenuBar />
      <h1 className="title-test">Testes de Habilidades</h1>

      <div>
        <button className="btn-test-qi">Teste de QI</button>
      </div>

      <div>
        <button className="btn-test-abilities">Teste de Habilidades Sociais</button>
      </div>

      <div>
        <button className="btn-test-logic">Teste de Raciocínio Lógico</button>
      </div>

      <div>
        <button className="btn-aptitude">Teste de aptidão</button>
      </div>
    </div>
  );
}

export default Test;
