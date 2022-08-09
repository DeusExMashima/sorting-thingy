import { selector } from 'recoil';
import sort from '../../algortihms/sort';
import { currentSequenceState, sortTypeState } from '../atoms';
import initialArraySelector from './initialArraySelector';

const animationSequence = selector({
    key: 'animationSequence',
    get: ({ get }) => {
        const startArray = get(initialArraySelector);
        const sortType = get(sortTypeState);
        const currentSequenceIndex = get(currentSequenceState);
        
        const { arraySequence, swapSequence } = sort(startArray, sortType);
        const endOfSequenceIndex = arraySequence.length;

        return {
            arraySequence,
            currentSequenceIndex,
            endOfSequenceIndex,
            swapSequence,
        };
    }
})

export default animationSequence;