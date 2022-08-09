import { selector } from 'recoil';
import { arraySizeState, currentSequenceState, hasStartedState, runState } from '../atoms';

const sortStatus = selector({
    key: 'sortStatus',
    get: ({ get }) => {
        const currentIndex = get(currentSequenceState);
        const arraySize = get(arraySizeState);

        const isRunning = get(runState);

        const hasStarted = get(hasStartedState);

        const isSorted = currentIndex === (arraySize -1);
    

        return {
            isRunning,
            isSorted,
            hasStarted,
        }
    }
})

export default sortStatus;