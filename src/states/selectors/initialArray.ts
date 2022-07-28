import { selector } from 'recoil';
import getInitArray from '../../utils/getInitArray';
import { arraySizeState } from '../atoms';

const arraySelector = selector({
    key: 'arraySelector',
    get: ({ get }) => {
        const arraySize = get(arraySizeState);
        
        const arrayResult = getInitArray(arraySize);

        return {
            arraySize,
            arrayResult
        }
    }
})

export default arraySelector;