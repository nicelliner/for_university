const stones = [
    ["A", "B", true], ["A", "C", true], ["B", "C", true],
    ["A", "D", true], ["B", "D", true], ["D", "C", true],
    ["E", "D", true], ["E", "B", true], ["A", "E", false],
    ["C", "E", false]
]

// const stoneSorted = (stones) => {
//   if (stones.length === 1) return stones;
//   return stoneSorted(stones) + stones[0][0] + stoneSorted(stones);
// }
//
// const lessArr = (stones, i = 0, resultArray = []) => {
//   if (i === stones.length) return resultArray
//
// }
//
// console.log(stoneSorted(stones))