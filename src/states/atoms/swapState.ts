import { atom } from 'recoil';

const initialState: SwapState = {
    index1: 3,
    index2: 8,
};

const swapState = atom({
    key: 'swapState',
    default: initialState,
})

export default swapState;