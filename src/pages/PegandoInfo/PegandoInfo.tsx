import "./PegandoInfo.css";

export const PegandoInfo = () => {
  return (
    <div className="container">
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
    </div>
  );
};
