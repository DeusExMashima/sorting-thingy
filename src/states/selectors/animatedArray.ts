import { selector } from 'recoil';
import animationSequence from './animationSequence';

const animatedArray = selector({
    key: 'animatedArray',
    get: ({ get }) => {
        const {
            arraySequence,
            currentSequenceIndex,
            endOfSequenceIndex,
            swapSequence,
        } = get(animationSequence);

        return {
            currentArray: arraySequence[currentSequenceIndex],
            currentSwap: swapSequence[currentSequenceIndex],
            endOfSequenceIndex
        };
    }
})

export default animatedArray;