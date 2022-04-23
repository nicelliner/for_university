const stones = [
    ["A", "B", true], ["A", "C", true], ["B", "C", true],
    ["A", "D", true], ["B", "D", true], ["D", "C", true],
    ["E", "D", true], ["E", "B", true], ["A", "E", false],
    ["C", "E", false]
]

// [“E”, ”A”, ”D”, ”B”, ”C”] не верный ответ, так как ["B", "D", true]

const stoneSorted = (stones) => {
  return sorted(stones).split("")
}

const sorted = (stones) => {
  if (stones.length === 1)
      return (stones[0][2] === true) ? stones[0][0] + stones[0][1] : stones[0][1] + stones[0][0];
  return heaviestStone(stones) + sorted(deleteHeaviestStoneInStones(stones, heaviestStone(stones)));
}

const heaviestStone = (stones, element = stones[0][0], i = 0) => {
    if (i === stones.length) return element;
    if (stones[i].indexOf(element) === -1) return heaviestStone(stones, element, ++i);
    return (stones[i].indexOf(element) === 0 && stones[i][2] === true
        || stones[i].indexOf(element) === 1 && stones[i][2] === false)
        ? heaviestStone(stones, element, ++i)
        : heaviestStone(stones, stones[i][1]);
}

const deleteHeaviestStoneInStones = (stones, heaviestStone, resultStones = [],i =0) => {
    if (i === stones.length) return resultStones;
    if (stones[i].indexOf(heaviestStone) === -1)  resultStones.push(stones[i]);
    return deleteHeaviestStoneInStones(stones, heaviestStone, resultStones, ++i);
}

console.log(stoneSorted(stones))
