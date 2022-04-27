names = ["Миша", "Гена", "Маша", "Олег", "Петя", "Вова", "Вера", "Лена", "Света"];
k = 30;

const snowballSearch = (names, k, i = 0) => {
    if (k <= names.slice(0, i + 1).length) return jump(names.slice(0, i + 1), k);
    return snowballSearch(names, jump(names.slice(0, i + 1), k), ++i);
}

const jump = (array, k, i = 0) => {
    if ( i === array.length ) return k;
    if ( k === 1 ) return array[i];
    return jump(array, --k, ++i);
}

// const snowbalSearch = (names, k, resultArray = [], i = 0) => {
//   return (resultArray.length >= k) ? resultArray[k - 1] : snowballSearch(names, k, resultArray.concat(names.slice(0, i)), ++i);
// }

console.log(snowballSearch(names, k))