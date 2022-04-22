const str = "ГозулиагртГтГроаугитглтГроауГрулзиораороуизлтГроуулГиатзлилит";

const catchGrowlith = (str, word = "Гроулит", sum = 100, letter = 0) => {
    if (letter === word.length ) return sum;
    if (letterCount(str, word[letter]) < sum) sum = letterCount(str, word[letter]);
    return catchGrowlith(str, word, sum, ++letter);
}

const letterCount = (str, letter, sum = 0, i = 0) => {
    return (str.indexOf(letter, i) === -1) ? sum : letterCount(str, letter, ++sum , str.indexOf(letter, i)+1);
}

console.log(catchGrowlith(str));