import { atom } from 'recoil';

const initialState = false;

const runState = atom({
    key: 'runState',
    default: initialState,
})

export default runState;