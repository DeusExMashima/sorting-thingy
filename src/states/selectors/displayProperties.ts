import { selector } from 'recoil';
import getBarWidth from '../../utils/getBarWidth';
import getHeightMultiplier from '../../utils/getHeightMultiplier';
import { arraySizeState, heightState, sortTypeState, widthState } from '../atoms';

const displayProperties = selector({
    key: 'displayProperties',
    get: ({ get }) => {
        const height = get(heightState);
        const width = get(widthState);
        const arraySize = get(arraySizeState);
        const sortType = get(sortTypeState);

        const barWidth = getBarWidth(height, arraySize)
        const heightMultiplier = getHeightMultiplier(width, arraySize);
        const displayHeight = height*1.1
        
        const properties = {
            arraySize,
            barWidth,
            displayHeight,
            height,
            heightMultiplier,
            sortType,
            width,
        }

        return properties;
    }
})

export default displayProperties;