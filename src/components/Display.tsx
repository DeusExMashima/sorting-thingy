import algorithms from '../algortihms';
import { useHighlightSwap, useUpdatedArray, useSetSwap, useInitialArray } from '../states/custom-hooks';
import useVisualizerProperties from '../states/custom-hooks/useVisualizerProperties';
import DisplayArrayBar from './DisplayArrayBar';

const Display: React.FC = (): React.ReactElement => {
  const { arrayResult } = useInitialArray();
  const [updatedArray, setUpdatedArray] = useUpdatedArray();
  const setSwap = useSetSwap();
  const { index1, index2 } = useHighlightSwap();
  const { displayHeight, width, barWidth, heightMultiplier } = useVisualizerProperties();

  algorithms['BUBBLE_SORT'](arrayResult, setSwap, setUpdatedArray);
  
  return (
    <div className="visualizer-display" style={{ width: `${width*1.2}px`, height: `${displayHeight}px`, }}>
      <div className="array-group">
        {updatedArray.map((itemNumber: number, index: number) => <DisplayArrayBar barWidth={barWidth} heightMultiplier={heightMultiplier} index1={index1} index2={index2} itemNumber={itemNumber} key={`bar-${index}`} />)}
      </div>
    </div>
  )
}
  
  export default Display;