import React from "react";
import ReactPlayer from "react-player";
import { setScoreValue, getScoreValue } from "../services/localStorage";
import MenuBar from "../components/MenuBar";
import "../style/courses.css";

function Courses() {
  function setScoreLocalStorage() {
    setScoreValue("score", Number(getScoreValue("score") + 10));
    setScore();
  }

  function setScore() {
    const shareButton = document.querySelector(".btn-course");
    shareButton.value = "Parabéns! Você ganhou 10 pontos.";
    const paragraph = document.querySelector(".more-score");
    const span = document.createElement("span");
    paragraph.appendChild(span);
    span.innerHTML = "Parabéns! Você ganhou 10 pontos.";
  }

  return (
    <div>
      <MenuBar />
      <div className="courses-body">
        <h1 className="courses-title">Cursos</h1>
        <section>
          <h2 className="courses-title">Habilidades técnicas</h2>

          <div className="videos-div">
            <p className="title-video">Noções de Word</p>
            <ReactPlayer
              className="video"
              url="https://www.youtube.com/watch?v=CEvvMv7u2ag"
            />

            <div className="buttons-couse">
              <button
                className="btn-course"
                type="button"
                onClick={() => setScoreLocalStorage()}
              >
                Concluído
              </button>
              <button className="btn-course">Próximo</button>
            </div>
            <div>
              <p className="more-score" />
            </div>
          </div>

          <div className="videos-div">
            <p className="title-video">Como escrever um email</p>
            <ReactPlayer
              className="video"
              url="https://www.youtube.com/watch?v=yYow1jSy4vE"
            />

            <div className="buttons-couse">
              <button
                type="button"
                className="btn-course"
                onClick={() => setScoreLocalStorage()}
              >
                Concluído
              </button>
              <button className="btn-course">Próximo</button>
            </div>
          </div>

          <div className="videos-div">
            <p className="title-video">Inglês básico</p>
            <ReactPlayer
              className="video"
              url="https://www.youtube.com/watch?v=S45kHeWnT0M"
            />

            <div className="buttons-couse">
              <button
                type="button"
                className="btn-course"
                onClick={() => setScoreLocalStorage()}
              >
                Concluído
              </button>
              <button className="btn-course">Próximo</button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="courses-title">Habilidades comportamentais</h2>

          <div className="videos-div">
            <p className="title-video">Elaboração de currículo</p>
            <ReactPlayer
              className="video"
              url="https://www.youtube.com/watch?v=dK9-W918_eM"
            />

            <div className="buttons-couse">
              <button
                type="button"
                className="btn-course"
                onClick={() => setScoreLocalStorage()}
              >
                Concluído
              </button>
              <button className="btn-course">Próximo</button>
            </div>
          </div>

          <div className="videos-div">
            <p className="title-video">Preparação para entrevista</p>
            <ReactPlayer
              className="video"
              url="https://www.youtube.com/watch?v=MRx461teV-4&list=PL8KuQfA-fFhnQNuPZ6ss3YAXl2_gppTeD"
            />

            <div className="buttons-couse">
              <button
                type="button"
                className="btn-course"
                onClick={() => setScoreLocalStorage()}
              >
                Concluído
              </button>
              <button className="btn-course">Próximo</button>
            </div>
          </div>

          <div className="videos-div">
            <p className="title-video">Comunicação não violenta</p>
            <ReactPlayer
              className="video"
              url="https://www.youtube.com/watch?v=uofE9CnWDYU"
            />

            <div className="buttons-couse">
              <button
                type="button"
                className="btn-course"
                onClick={() => setScoreLocalStorage()}
              >
                Concluído
              </button>
              <button className="btn-course">Próximo</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Courses;
