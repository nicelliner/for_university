const array = [1,1,2,2,3,3,4,4,5,6,7,8];

const paritySort = (array) => {
    return unionArrays(separation(array, 1), separation(array, 0));
}

const unionArrays = (arr1, arr2, resultArray = [], i = 0) => {
    if (arr1.length !== arr2.length) return console.log("Количество четных и нечетных элементов не совпадает");
    if (i === arr1.length) return resultArray;
    return unionArrays(arr1, arr2, resultArray.concat(arr1[i], arr2[i]), ++i);
}

const separation = (array, remainder, resultArray = [], i = 0) => {
    if (i === array.length) return resultArray;
    if (array[i] % 2 === remainder) resultArray.push(array[i]);
    return separation(array, remainder, resultArray, ++i)
}

console.log(paritySort(array));