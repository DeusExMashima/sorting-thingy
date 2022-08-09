import { useRecoilValue } from 'recoil';

import { displayProperties, startEndArray } from '../../states/selectors';

import DisplayArrayBar from '../DisplayArrayBar';

interface NonAnimationDisPlayProps {
  start?: boolean;
}

const NonAnimationDisPlay: React.FC<NonAnimationDisPlayProps> = (props: NonAnimationDisPlayProps): React.ReactElement => {
  const { start } = props;
  const {  barWidth, heightMultiplier } = useRecoilValue(displayProperties);
  const { startArray, endArray } = useRecoilValue(startEndArray);

  if (start) {
    return (    <>
      {startArray.map((itemNumber: number, index: number) => <DisplayArrayBar barWidth={barWidth} heightMultiplier={heightMultiplier} itemNumber={itemNumber} key={`bar-${index}`} />)}
      </>)

  }
  return (
    <>
    {endArray.map((itemNumber: number, index: number) => <DisplayArrayBar barWidth={barWidth} heightMultiplier={heightMultiplier} itemNumber={itemNumber} key={`bar-${index}`} />)}
    </>
  );
}

export default NonAnimationDisPlay;