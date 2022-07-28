import getInitArray from './getInitArray';

describe('getInitialArray function', ()=> {
    const randomNumber = Math.floor(Math.random()*100);
    it (`should return array with the length of ${randomNumber}`, (): void => {
        const receievedArray = getInitArray(randomNumber);

        expect(receievedArray).toHaveLength(randomNumber);
    })
})