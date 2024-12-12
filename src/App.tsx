import { Pomodorotimer } from "./components/PomodoroTimer/PomodoroTimer";
import "./App.css";

export const App = () => {
  return (
    <div className="container">
        <Pomodorotimer
          pomodoroTime={1500}
          shortRestTime={300}
          longRestTime={300}
          cycles={4}
        />
    </div>
  );
};
