const firstArray = [1, 2, 3, "n", 5, 6, 7, 8, 9, 10];
const secondArray = [1, 2, 3, 4, 5, 6, 7, "n", 9, 10];

const closeToN = (array) => {
    const indexN = array.indexOf("n");
    return [indexN-1,indexN+1];
}

const numbersAfterN = (array) => {
    return array.slice(array.indexOf("n")+1, array.length);
}

const mergerNumbersAfterN = (firstArray, secondArray) => {
    const indexN = firstArray.indexOf("n");
    const new_first  = firstArray.slice(indexN+1, firstArray.length);
    return new_first.concat(secondArray.slice(0, secondArray.indexOf("n")));
}

console.log(closeToN(secondArray))
console.log(numbersAfterN(firstArray))
console.log(mergerNumbersAfterN(firstArray, secondArray))