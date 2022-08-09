import { atom } from 'recoil';

const initialState: boolean = false;

const hasStartedState = atom({
    key: 'hasStartedState',
    default: initialState,
})

export default hasStartedState;