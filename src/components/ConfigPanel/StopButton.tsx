import { useRecoilState } from "recoil";
import { runState } from "../../states/atoms";

const StopButton = () => {
  const [, setIsRunning] = useRecoilState(runState);
  
  const stop = (): void => {
      setIsRunning(false)
  }
    return (
      <button onClick={stop}>StopButton</button>
    )
  }
  
export default StopButton;