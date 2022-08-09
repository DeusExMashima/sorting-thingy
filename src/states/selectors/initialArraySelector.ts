import { selector } from 'recoil';
import getInitArray from '../../utils/getInitArray';
import { arraySizeState } from '../atoms';

const initialArraySelector = selector({
    key: 'initialArraySelector',
    get: ({ get }) => {
        const arraySize = get(arraySizeState);
        
        const initialArray = getInitArray(arraySize);

        return initialArray;
    }
})

export default initialArraySelector;