const bubbleSort = (inputArray: number[], arraySequence: number[][], swapSequence: number[][]): void => {
    const sortedArray: number[] = [...inputArray];
    let len = sortedArray.length;
    for (let index1 = 0; index1 < len; index1++) {
        for (let index2 = 0; index2 < len; index2++) {
            if (sortedArray[index2] > sortedArray[index2 + 1]) {
                swapSequence.push([index2, index2+1]);
                let temp = sortedArray[index2];
                sortedArray[index2] = sortedArray[index2 + 1];
                sortedArray[index2 + 1] = temp;
                arraySequence.push([...sortedArray])
            }
        }
    }
}

export default bubbleSort;