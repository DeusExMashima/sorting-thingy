import { atom } from 'recoil';

const initialState: number[] = [];

const arrayState = atom({
    key: 'arrayState',
    default: initialState,
})

export default arrayState;