// input = 1
// output = *
// input = 2
// output = **

let base = ""

  function printStar (shape,n) {
  for (let i = 0; i < n; i++) {
    base += shape
    i++
  }
}

console.log (printStar('*',2))