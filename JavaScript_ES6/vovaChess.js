const desk1 = [
    ["WBWBWBWB"], ["BWBWBWBW"], ["BWBWBWBW"], ["BWWBWBWW"],
    ["WBWBWBWB"], ["WBWBWBWB"], ["WBWBWBWB"], ["WBWBWBWB"],
]

const desk2 = [
    ["WBWBWBWB"], ["WBWBWBWB"], ["WBWBWBWB"], ["WBWBWBWB"],
    ["WBWBWBWB"], ["WBWBWBWB"], ["WBWBWBWB"], ["WBWBWBWB"],
]

const vovaChess = (desk, i = desk.length-1) => {
    if (i === -1) return true;
    if (fieldCheck(desk[i][0]) === false) return false;
    return vovaChess(desk, --i);
}

const fieldCheck = (field, i = field.length-1) => {
    if (i === 1) return true;
    if (field[i] === field[i-1]) return false;
    return fieldCheck(field, --i);
}

console.log(vovaChess(desk1))
console.log(vovaChess(desk2))