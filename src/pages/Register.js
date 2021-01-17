import React from "react";
import "../style/register.css";

function Register() {
  return (
    <div className="body-register">
      <h1 className="reg-title">Cadastro para se tornar empresa parceira</h1>
      <form className="form-register">
        <label>
          Nome:
          <input
            className="inputs-class"
            type="text"
            placeholder="Digite o nome da empresa"
          />
        </label>
        <br />
        <label>
          CNPJ:
          <input
            className="inputs-class"
            type="text"
            placeholder="Digite seu CNPJ"
          />
        </label>
        <br />
        <label>
          E-mail:
          <input
            className="inputs-class"
            type="text"
            placeholder="Digite seu e-mail"
          />
        </label>
        <br />
        <label>
          Estado:
          <select className="select-class">
            <option>Acre (AC)</option>
            <option>Alagoas (AL)</option>
            <option>Amapá (AP)</option>
            <option>Amazonas (AM)</option>
            <option>Bahia (BA)</option>
            <option>Ceará (CE)</option>
            <option>Distrito Federal (DF)</option>
            <option>Espírito Santo (ES)</option>
          </select>
        </label>
      </form>
      <br />
      <h2>Selecione seu plano</h2>
      <div className="master-div-plans">
        <div className="div-plans">
          <h3>Plano básico</h3>
          <p>Investimento:</p>
          <h3>R$ 4,99</h3>
          <p>ao mês</p>
          <p className="info-plans">Mais informações e pagamento</p>
        </div>

        <div className="div-plans">
          <h3>Plano premium</h3>
          <p>Investimento:</p>
          <h3>R$ 9,99</h3>
          <p>ao mês</p>
          <p className="info-plans">Mais informações e pagamento</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
