const str = "JavaScript"

const toCase = (str, index) => {
  if (str[index] == str.toUpperCase()[index]) return str.toUpperCase();
  if (str[index] == str.toLowerCase()[index]) return str.toLowerCase();
}

const startOrEnd = (str, underStr) => {
    if (str.startsWith(underStr)) return true;
    if (str.endsWith(underStr)) return true;
    return false;
}

console.log(toCase(str, 1))
console.log(startOrEnd(str, "Sc"))