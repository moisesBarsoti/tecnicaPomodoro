import { Pomodorotimer } from './components/PomodoroTimer/PomodoroTimer';
import "./App.css";

export const App = () => {
  return (
    <div>
      <Pomodorotimer defaultPomodoroTime={3000} />
    </div>
  );
};
