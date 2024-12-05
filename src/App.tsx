import { Pomodorotimer } from "./components/PomodoroTimer/PomodoroTimer";
import "./App.css";

export const App = () => {
  return (
    <div className="container">
      <div className="colorBgWorking">
        <Pomodorotimer
          pomodoroTime={1500}
          shortRestTime={300}
          longRestTime={900}
          cycles={4}
        />
      </div>
    </div>
  );
};
