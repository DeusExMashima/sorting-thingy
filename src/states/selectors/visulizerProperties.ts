import { selector } from 'recoil';
import getBarWidth from '../../utils/getBarWidth';
import getHeightMultiplier from '../../utils/getHeightMultiplier';
import { arraySizeState, heightState, widthState } from '../atoms';

const visualizerProperties = selector({
    key: 'visualizerProperties',
    get: ({ get }) => {
        const height = get(heightState);
        const width = get(widthState);
        const arraySize = get(arraySizeState);

        const displayHeight = height*1.1
        const barWidth = getBarWidth(height, arraySize)
        const heightMultiplier = getHeightMultiplier(width, arraySize);

        return {
            barWidth,
            displayHeight,
            height,
            heightMultiplier,
            width,
        }
    }
})

export default visualizerProperties;