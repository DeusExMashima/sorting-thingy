import { useRecoilState } from "recoil";
import { hasStartedState, runState } from "../../states/atoms";

const StartButton = () => {
  const [isRunning, setIsRunning] = useRecoilState(runState);
  const [hasStarted, setHasStarted] = useRecoilState(hasStartedState);
  
  const start = (): void => {
    if (!hasStarted) {
      setHasStarted(true);
    }

    if (!isRunning) {
      setIsRunning(true)
    }
  }

  return (
    <button onClick={start}>StartButton</button>
  )
}
  
export default StartButton;