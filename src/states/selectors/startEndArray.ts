import { selector } from 'recoil';
import animationSequence from './animationSequence';

const startEndArray = selector({
    key: 'startEndArray',
    get: ({ get }) => {
        const { arraySequence,} = get(animationSequence);

        return {
            startArray: arraySequence[0],
            endArray: arraySequence[-1]   
        };
    }
})

export default startEndArray;