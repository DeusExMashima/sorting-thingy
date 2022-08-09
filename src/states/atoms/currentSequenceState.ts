import { atom } from 'recoil';

const initialState: number = 0;

const currentSequenceState = atom({
    key: 'currentSequenceState',
    default: initialState,
})

export default currentSequenceState;