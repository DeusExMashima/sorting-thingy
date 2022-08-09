import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentSequenceState, runState } from '../states/atoms';
import speed from '../states/selectors/speed';
import ConfigPanel from './ConfigPanel';
import Display from './Display';

const Visualizer: React.FC = (): React.ReactElement => {
  const [index, setIndex] = useRecoilState(currentSequenceState);
  const [isRunning] = useRecoilState(runState);
  
  const runSpeed = useRecoilValue(speed);

  useEffect(()=> {
    let timer;

    if (isRunning) {
      timer = setTimeout(()=> setIndex(index +1), runSpeed)
    } else {
      clearTimeout(timer);
    }
  }, [index, setIndex, runSpeed, isRunning]);

  return (
    <div className="visualizer">
      <Display />
      <ConfigPanel />
    </div>
  )
}

export default Visualizer;