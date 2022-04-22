const substraction = (a, b) => {
    if (b === 0) return a;
    return  (a % 10) === 0 ? substraction(a/10, --b) : substraction(--a, --b) ;
}

console.log(substraction(512, 4));
console.log(substraction(90000400001240, 24));


