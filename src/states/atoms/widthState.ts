import { atom } from 'recoil';

const initialState: number = 500;

const widthState = atom({
    key: 'widthState',
    default: initialState,
})

export default widthState;