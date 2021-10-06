function chooseDecimals(number, decimal){
  return number.toFixed(decimal)
}
console.log(chooseDecimals(2.100212, 2));
console.log(chooseDecimals(2.100212, 3));
console.log(chooseDecimals(2100, 2));