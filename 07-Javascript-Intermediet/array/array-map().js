// hasilny disimpan dalam variabel baru
const seq = [1, 3, 7, 2] 
const mapper = function(item, index){
  return index * item; // 0*1, 1*3, 2*7, 3*2
}

const result = seq.map(mapper)

console.log(result)