function roundUpToFive(number){
  let roundUp = number + (5-number%5)
  return roundUp
}
console.log(roundUpToFive(32))
console.log(roundUpToFive(137));
console.log(roundUpToFive(142));
