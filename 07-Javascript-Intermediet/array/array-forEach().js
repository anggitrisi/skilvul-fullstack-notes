// foreach tidak mengembalikan narray baru
 seq = [1, 3, 7, 2] 
const mapper = function(item, index){
  return index * item; // 0*1, 1*3, 2*7, 3*2
}

const p = seq.forEach(function(value,index){
  console.log("index: " + index)
  console.log("value: "+ value)
})

// mau update

const p2 = (function(value,index){
  console.log("index: " + index)
  console.log("value: "+ value)
})