import { atom } from 'recoil';

const initialState: number = 20;

const arraySizeState = atom({
    key: 'arraySizeState',
    default: initialState,
})

export default arraySizeState;