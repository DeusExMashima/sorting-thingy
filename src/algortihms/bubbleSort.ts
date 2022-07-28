import { SetterOrUpdater } from "recoil";

const bubbleSort = (inputArray: number[], setSwap: SetterOrUpdater<SwapState>, setUpdatedArray:SetterOrUpdater<any>) => {
    const sortedArray: number[] = inputArray;
    let len = inputArray.length;
    for (let index1 = 0; index1 < len; index1++) { //you can also use "for in", so you don't need the variable "len"
        for (let index2 = 0; index2 < len; index2++) {
            if (inputArray[index2] > inputArray[index2 + 1]) {
                setSwap({ index1: index2, index2: index2+1 })
                let temp = inputArray[index2];
                inputArray[index2] = inputArray[index2 + 1];
                inputArray[index2 + 1] = temp;
            }
            setUpdatedArray(inputArray);
        }
    }
    return sortedArray;
}

export default bubbleSort;