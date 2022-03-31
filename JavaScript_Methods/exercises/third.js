const str = "?Я?предпочитаю?вести?здоровый?образ?жизни";

const splitStr = (str) => {
    return str.slice(1,str.length).split(str[0]);
}

const toEnd = (str, underStr) => {
    if (str.indexOf(underStr, 0) == -1) return "";
    return str.slice(str.indexOf(underStr, 0), str.length)
}

console.log(splitStr(str))
console.log(toEnd(str, "вести"))
