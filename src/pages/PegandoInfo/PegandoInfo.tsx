import { IoIosArrowForward } from "react-icons/io";
import "./PegandoInfo.css";
import { MdDelete } from "react-icons/md";

export const PegandoInfo = () => {
  return (
    <div className="container">
      <div className="info">
        <form action="">
          <h1>Preencha as informações</h1>
          <label htmlFor="">Nome da Tarefa</label>
          <input type="text" title="Nome da tarefa" autoFocus />
          <label htmlFor="">Tempo da Tarefa</label>
          <input type="number" />
          <label htmlFor="">Tempo de Descanso curto</label>
          <input type="number" />
          <label htmlFor="">Tempo de Descanso longo</label>
          <input type="number" />
          <label htmlFor="">Ciclos da Tarefa</label>
          <input type="number" />
          <a title="Criar pomodoro" href="/temporizador">
            Criar
          </a>
        </form>
        <div className="pomodorosSave">
          <h1>Pomodoros Salvos</h1>
          <div className="salvos">
            <p>teste</p>
            <MdDelete
              className="icon"
              id="iconDelete"
              title="Deletar Pomodoro"
            />
            <IoIosArrowForward
              className="icon"
              id="iconArrow"
              title="Ir para Pomodoro"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
