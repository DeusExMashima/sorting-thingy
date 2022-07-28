import { atom } from 'recoil';

const initialState: number = 500;

const heightState = atom({
    key: 'heightState',
    default: initialState,
})

export default heightState;