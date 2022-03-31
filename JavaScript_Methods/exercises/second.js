const arr = [1, 2, 3, 4, 10];

const factorial = (array) => {
  if (array.length == 1) return 1;
  return array.length * factorial(array.slice(0, array.length-1));
}

const reverseString = (array) => {
  const arr = array.reverse();
  return arr.join("-");
}

console.log(factorial(arr))
console.log(reverseString(arr))