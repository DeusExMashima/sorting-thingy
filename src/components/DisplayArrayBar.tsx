import ArrayBar from "./ArrayBar";

const DisplayArrayBar: React.FC<DisplayArrayBarProps> = (props: DisplayArrayBarProps): React.ReactElement => {
    const { barWidth, heightMultiplier, index1, index2, itemNumber } = props;

    const barHeight: number = heightMultiplier * itemNumber;

    const isIndex1ToSwap: boolean = itemNumber === index1;
    const isIndex2ToSwap: boolean = itemNumber === index2;

    return <ArrayBar barHeight={barHeight} barWidth={barWidth} isToBeSwapped={isIndex1ToSwap || isIndex2ToSwap} />
}
    
export default DisplayArrayBar;