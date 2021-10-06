const numbers = [1, 2, 3, 4, 5, 6]

// menjumlahkan dengan loop
let sum = 0;
for(let i = 0; i < numbers.length; i++){
  const x = numbers[i]; // curret value (berganti ganti dan bergantung pada index saat ini)
  sum = sum + numbers[i]; 
}
console.log(sum)

// menjumlahkan dengan reduce
// [1, 2, 3, 4, 5, 6]
// index= undefined, prev = initialValue
// index=0, prev = subTotal = 0 + 1 = 1
// index=1, prev = subTotal = 1 + 2 = 3
// index=2, prev = subTotal = 3 + 3 = 6
// index=3, prev = subTotal = 6 + 4 = 10
// index=4, prev = subTotal = 10 + 5 = 15
// index=45, prev = subTotal = 15 + 6 = 21
// habis. Keluar dan mengembalikan previous terakhit


const reducer = function(prev, curr) {
  const subTotal = prev + curr
  return subTotal // subTotal akan menjadi prev untuk iterasi berikutnya
}
const initialValue = 0
const total = numbers.reduce(reducer, initialValue)

// disingkat menjadi
// const total = numbers.reduce((prev, curr, idx) => {
//   prev = prev + curr
//   return prev
// }, 0)

console.log(total)

const ganjilGenapReducer = function(prev, curr){
  if (curr % 2 ==0){
    //genap
    prev.genap.push(curr)
  } else {
    //ganjil
    prev.ganjil.push(curr)
  }
  return prev
}

const initalObject = {
  ganjil : [], // 1, 3, 5
  genap : [] // 2, 4, 6
}

const result = numbers.reduce(ganjilGenapReducer,initalObject);

console.log (result)
