const numbers = [1, 3, 5, 7, 8]

const isAllOdds = numbers.every(x => x%2 == 1)
const isSomeEven = numbers.every(x => x%2 == 0)
console.log(isAllOdds)
console.log(isSomeEven)
