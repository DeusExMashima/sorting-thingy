// CREDIT: https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
const getInitArray = (arrayLength: number) => {
    const finalArray: number[] = []

    while(finalArray.length !== arrayLength) {
        const randomNumber = Math.floor(Math.random() * arrayLength)+1;
        if (randomNumber > 0 && !finalArray.includes(randomNumber)) {
            finalArray.push(randomNumber);
        }
    }

    return finalArray;
};

export default getInitArray;