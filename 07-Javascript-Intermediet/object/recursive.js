function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

console.log (countDown(5))

console.log ("Mencari Nilai Pangkat")

function pangkat(value, nilai_pangkat){
  if(nilai_pangkat === 1) {
    return value
  } else {
    return value * pangkat(value, nilai_pangkat-1)
  }
}
console.log (pangkat(2, 3))

console.log ("Mencari Faktorial")

function faktorial(params){
  if (params == 1){
    return 1
  }
  
  else {
    return params * faktorial(params-1)
  }
}
console.log (faktorial(3))