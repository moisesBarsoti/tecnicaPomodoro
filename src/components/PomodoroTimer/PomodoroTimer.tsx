import { useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { Button } from "../Botao/Botao";
import { Timer } from "../Timer/Timer";
import "./PomodoroTimer.css";

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export const Pomodorotimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>Você está: Trabalhando</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Teste" onClick={() => alert("oi")}></Button>
        <Button text="Teste" onClick={() => alert("oi")}></Button>
        <Button text="Teste" onClick={() => alert("oi")}></Button>
      </div>
      <div className="details">
        <p>Teste: testetetete</p>
        <p>Teste: testetetete</p>
        <p>Teste: testetetete</p>
        <p>Teste: testetetete</p>
      </div>
    </div>
  );
};
