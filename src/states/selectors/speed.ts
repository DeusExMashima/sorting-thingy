import { selector } from 'recoil';

import { speedState } from '../atoms';

const speed = selector({
    key: 'speed',
    get: ({ get }) => {
        const initialSpeed = get(speedState);
        
        const runSpeed = 500*initialSpeed;

        return runSpeed;
    }
})

export default speed;