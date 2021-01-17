import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { setUserValue } from "../services/localStorage";
import "../style/login.css";
import tmj from "../images/tmj.png";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const six = 6;
    const minPasswordLength = password.length > six;

    if (minPasswordLength) {
      setIsDisabled(false);
    }
  }, [password]);

  const handleRedirect = () => {
    setUserValue("user", user);
  };

  return (
    <div className="body-login">
      <aside>
        <img className="img-logo" src={tmj} alt="Logo TMJ" />
        <h1 className="title-login">
          Seu primeiro passo para entrar no mercado de trabalho!
        </h1>
        <form>
          <div>
            <input
              className="input-login"
              type="text"
              placeholder="Digite seu usuário"
              id="user"
              required="required"
              value={user}
              onChange={({ target }) => setUser(target.value)}
            />
          </div>
          <div>
            <input
              className="input-login"
              type="password"
              placeholder="Digite sua senha"
              id="senha"
              value={password}
              required="required"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="access-login">
            <button
              className="button-login"
              type="button"
              disabled={isDisabled}
              onClick={() => handleRedirect()}
            >
              <Link to="/cursos">Entrar</Link>
            </button>

            <button className="button-login">Cadastrar</button>
          </div>
        </form>

        <Link to="/empresas">
          <button type="button" className="button-company">
            Sou uma empresa
          </button>
        </Link>
      </aside>
    </div>
  );
}

export default Login;
