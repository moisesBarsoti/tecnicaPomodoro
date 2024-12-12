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
  const [started, setStarted] = useState(false);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null
  );

  const startWork = () => {
    setStarted(true);
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
  };

  const toggleCounting = () => {
    setTimeCounting(!timeCounting);
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
    setStarted(false);
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
      startWork();
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
    startWork,
    props.cycles,
  ]);

  useEffect(() => {
    if (working) {
      document.body.classList.add("colorBgWorking");
      document.body.classList.remove("colorBgResting");
    } else if (resting) {
      document.body.classList.remove("colorBgWorking");
      document.body.classList.add("colorBgResting");
    }
  }, [working, resting]);

  return (
    <div className="pomodoro">
      <h2 className={working ? "colorBgWorking" : "colorBgResting"}>
        Você está: {working ? "Trabalhando" : "Descansando"}
      </h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        {!started && (
          <Button
            text="Iniciar"
            onClick={startWork}
            className={working ? "working-button" : "resting-button"}
          ></Button>
        )}
        {started && (
          <Button
            text={timeCounting ? "Pausar" : "Iniciar"}
            onClick={toggleCounting}
            className={working ? "working-button" : "resting-button"}
          ></Button>
        )}
        <Button
          text="Reiniciar"
          onClick={resetTimer}
          className={working ? "working-button" : "resting-button"}
        ></Button>
        <Button
          text="Voltar"
          onClick={() => alert("Em construção")}
          className={working ? "working-button" : "resting-button"}
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
