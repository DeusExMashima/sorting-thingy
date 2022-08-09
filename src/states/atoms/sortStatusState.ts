import { atom } from 'recoil';

const initialState = {
    hasStarted: false,
    isSorted: false,
}

const sortStatusState = atom({
    key: 'sortStatusState',
    default: initialState,
})

export default sortStatusState;