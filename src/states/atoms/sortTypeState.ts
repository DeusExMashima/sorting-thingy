import { atom } from 'recoil';

const initialState: SortType = 'BUBBLE_SORT';

const sortTypeState = atom({
    key: 'sortTypeState',
    default: initialState,
})

export default sortTypeState;