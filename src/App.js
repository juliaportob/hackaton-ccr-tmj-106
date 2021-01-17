import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Courses from "./pages/Courses";
import Companies from "./pages/Companies";
import Test from "./pages/Test";
import SelectionProcess from "./pages/SelectionProcess";
import Testimonies from "./pages/Testimonies";
import MenuPage from "./pages/MenuPage";
import Ranking from "./pages/Ranking";
import Register from "./pages/Register";

function App() {
  return (
    <Switch>
      <Route path="/" exact strict component={Login} />
      <Route path="/configuracoes" exact strict component={Settings} />
      <Route path="/cursos" exact strict component={Courses} />
      <Route path="/empresas" exact strict component={Companies} />
      <Route path="/perfil" exact strict component={Profile} />
      <Route path="/teste" exact strict component={Test} />
      <Route path="/depoimentos" exact strict component={Testimonies} />
      <Route path="/processos-seletivos" exact strict component={SelectionProcess} />
      <Route path="/menu" exact strict component={MenuPage} />
      <Route path="/ranking" exact strict component={Ranking} />
      <Route path="/cadastro-empresas" exact strict component={Register} />
    </Switch>
  );
}

export default App;
