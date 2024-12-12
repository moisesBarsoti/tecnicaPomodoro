import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { Button } from "../Botao/Botao";
import { Timer } from "../Timer/Timer";
import { SecondsToTime } from "../../utils/SecondsToTime";
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
  const [cycles, setCycles] = useState(new Array(props.cycles - 1).fill(true));

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null
  );

  const configureWork = () => {
    setTimeCounting(!timeCounting);
    if (!timeCounting) {
      setWorking(true);
      setResting(false);
      setMainTime(props.pomodoroTime);
    }
  };

  const configureResting = (long: boolean) => {
    setWorking(false);
    setResting(true);
    setMainTime(long ? props.longRestTime : props.shortRestTime);
  };

  const resetTimer = () => {
    setMainTime(props.pomodoroTime);
    setTimeCounting(false);
    setWorking(false);
    setResting(false);
    setFullWorkingTime(0);
  };

  useEffect(() => {
    if (mainTime > 0) return;

    if (working && cycles.length > 0) {
      configureResting(false);
      cycles.pop();
    } else if (working && cycles.length <= 0) {
      configureResting(true);
      setCycles(new Array(props.cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    } else if (resting) {
      configureWork();
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
  }, [
    working,
    resting,
    mainTime,
    configureResting,
    numberOfPomodoros,
    completedCycles,
    cycles,
    setCycles,
    configureWork,
    props.cycles,
  ]);

  return (
    <div className="pomodoro">
      <h2 className={working ? " colorBgWorking" : " colorBgResting"}>
        Você está: {working ? "Trabalhando" : "Descansando"}
      </h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button
          text={timeCounting ? "Pausar" : "Iniciar"}
          onClick={() => configureWork()}
          className={working ? "working-button" : "resting-button"}
        ></Button>
        <Button
          text="Reiniciar"
          onClick={() => resetTimer()}
          className={working ? "working-button" : "resting-button"}
        ></Button>
        <Button
          text="Voltar"
          className={working ? "working-button" : "resting-button"}
          onClick={() => alert("Em construção")}
        ></Button>
      </div>
      <div className="details">
        <p>Ciclos concluidos: {completedCycles}</p>
        <p>Horas trabalhadas: {SecondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros concluidos: {numberOfPomodoros}</p>
      </div>
    </div>
  );
};
