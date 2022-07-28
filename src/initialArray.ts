import getBarWidth from "./utils/getBarWidth";
import getHeightMultiplier from "./utils/getHeightMultiplier";
import getInitArray from "./utils/getInitArray";

const WIDTH = 500;
const HEIGHT = 500;
const ARRAY_SIZE = 20;
const ARRAY = getInitArray(ARRAY_SIZE);
const BAR_WIDTH = getBarWidth(WIDTH, ARRAY_SIZE)
const HEIGHT_MULTIPLIER = getHeightMultiplier(HEIGHT, ARRAY_SIZE)

export const initalArrayConfig = {
    array: ARRAY,
    arraySize: 20,
    barWidth: BAR_WIDTH,
    height: HEIGHT,
    heightMultiplier: HEIGHT_MULTIPLIER,
    width: WIDTH,
}