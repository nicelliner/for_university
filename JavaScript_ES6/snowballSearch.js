names = ["Миша", "Гена", "Маша", "Олег", "Петя", "Вова", "Вера", "Лена", "Света"];
k = 30;

const snowballSearch = (names, k, i = 0) => {
    if (k <= names.slice(0, i + 1).length) return jump(names, k);
    return snowballSearch(names, jump(names.slice(0, i + 1), k), ++i);
}

const jump = (array, k, i = 0) => {
    if ( k === 1) return array[i];
    if ( i === array.length ) return k;
    return jump(array, --k, ++i);
}

console.log(snowballSearch(names, k))