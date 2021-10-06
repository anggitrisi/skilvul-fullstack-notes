// cara berpikirku
function squareArea1(w,h) {
  const width = w;
  const height = h;
  return width * height
}
console.log(squareArea1(3,4))


// cara berpikir mentor
function squareArea2(w,h) {
  const area = w * h;
  console.log(area) //void (tidak punya kembalian)
}

squareArea2(5,4)

//funtion dalam variable, anonymous function

//kenapa bisa, karena javascript mengadopsi first class citizen function sehingga function dianggap sama persis seperti variable variable lain
const calculateArea = function(w,h) {
  const area = w * h
  return area //void (tidak punya kembalian)
}
const area = calculateArea(6,8)
console.log(area)


// arrow function
const calculateArea = (w,h) => {
  return w * h 
}
const area = calculateArea(6,10)
console.log(area)

// arrow function - shorthand : untuk kode yang sangat simple, hanya 1 proses dalam 1 fungsi atau satu line
const calculateArea = (w,h) => w * h 

const area = calculateArea(6,10)
console.log(area)

//arrow function - 
const f = x => 2 * x;