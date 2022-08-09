import { atom } from 'recoil';

const initialState: number = 1;

const speedState = atom({
    key: 'speedState',
    default: initialState,
})

export default speedState;