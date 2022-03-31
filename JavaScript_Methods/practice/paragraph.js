const paragraph = "Однажды я шел вечером мимо базарной площади в лесничество. " +
    "Оно помещалось на окраине города над рекой. " +
    "Среди улиц мальчишки играли в футбол. " +
    "Громкоговоритель висел на телеграфном столбе. " +
    "Он неожиданно защелкал. ";

const convertInArray = (str) => {
  let sentences = [];
  let fullSentencesArray = str.split(". ");
  for (let i = 0; i < fullSentencesArray.length - 1; i++) {
      words = fullSentencesArray[i].split(" ");
      length = words.length
      words[length] = "."
      sentences[i] = {length: length, words: words};
  }
  return sentences;
}

console.log(convertInArray(paragraph))