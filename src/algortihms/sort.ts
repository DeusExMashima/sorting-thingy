import bubbleSort from "./bubbleSort";

const sort = (initialArray: number[], sortType: SortType) => {
    const arraySequence: number[][] = [initialArray];
    const swapSequence: number[][] = [[0,0]];

    if (sortType === 'BUBBLE_SORT') {
        bubbleSort(initialArray, arraySequence, swapSequence);
    }
    return {
        arraySequence,
        swapSequence,
    }
}

export default sort;