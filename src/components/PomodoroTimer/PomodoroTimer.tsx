import { useState } from "react";
import { useInterval } from "../../hooks/useInterval";

interface Props {
  defaultPomodoroTime: number;
}

export const Pomodorotimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime + 1);
  }, 1000);

  return (
    <div>
      <h1>{mainTime}</h1>
    </div>
  );
};
