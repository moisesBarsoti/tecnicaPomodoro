import { useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { SecondsToTime } from "../../utils/SecondsToTime";

interface Props {
  defaultPomodoroTime: number;
}

export const Pomodorotimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div>
      <h1>{SecondsToTime(mainTime)}</h1>
    </div>
  );
};
