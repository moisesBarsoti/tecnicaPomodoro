import { useEffect, useState } from "react";
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
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 
  timeCounting ? 1000 : null,
);

useEffect(() => {
    if(working) document.body.classList.add('colorBgWorking');
    if(resting) document.body.classList.remove('colorBgWorking');
}, [working]);

const configureWork = () => {
  setTimeCounting(true);
  setWorking(true);
  setResting(false);
  setMainTime(props.pomodoroTime)
}

const configureResting = (long: boolean) => {
  setTimeCounting(true);
  setWorking(false);
  setResting(true);

  if(long) {
    setMainTime(props.longRestTime);
  } else {
    setMainTime(props.shortRestTime)
  }
}

  return (
    <div className="pomodoro">
      <h2>Você está: Trabalhando</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Reiniciar" onClick={() => configureWork()}></Button>
        <Button 
        text={timeCounting ? 'Pausar' : 'Iniciar'} 
        onClick={() => setTimeCounting(!timeCounting)}>
        </Button>
        <Button text="Voltar" onClick={() => alert('Em construção')}></Button>
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
