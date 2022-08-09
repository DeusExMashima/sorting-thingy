import { useRecoilValue } from 'recoil';
import { currentSequenceState } from '../../states/atoms';
import { animationSequence, displayProperties } from '../../states/selectors';
import DisplayArrayBar from '../DisplayArrayBar';

const AnimationDisplay: React.FC = (): React.ReactElement => {
  const {  barWidth, heightMultiplier } = useRecoilValue(displayProperties);
  
  const { arraySequence, swapSequence } = useRecoilValue(animationSequence);
  const  sequenceIndex = useRecoilValue(currentSequenceState);

  console.log(arraySequence)

  const currentArray = arraySequence[sequenceIndex]
  const currentSwap = swapSequence[sequenceIndex]

    return (
      <>
        {currentArray.map((itemNumber: number, index: number) => <DisplayArrayBar barWidth={barWidth} index1={currentSwap[0]} index2={currentSwap[1]} heightMultiplier={heightMultiplier} itemNumber={itemNumber} key={`bar-${index}`} />)}
      </>
    )
}

export default AnimationDisplay;