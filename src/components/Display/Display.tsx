import { useRecoilValue } from 'recoil';
import { displayProperties } from '../../states/selectors';
import sortStatus from '../../states/selectors/sortStatus';
import getDisplay from './getDisplay';

const Display: React.FC = (): React.ReactElement => {
  const { displayHeight, width } = useRecoilValue(displayProperties);
  const { isRunning, isSorted, hasStarted } = useRecoilValue(sortStatus);

  return (
    <div className="visualizer-display" style={{ width: `${width*1.2}px`, height: `${displayHeight}px`, }}>
      <div className="array-group">
      {getDisplay(isRunning, isSorted, hasStarted)}
      </div>
    </div>
  );
}

export default Display;