const arr = ["Backend", "Fronted", "Product Manager"]

const joined = arr.reduce((prev,curr, idx) => {
  let suffix = ','
  if ( idx == arr.length - 1){
    suffix = ""
  }
  const subJoin = prev + curr + suffix
  return subJoin
}, "Gabungan: ") //gabungan : Backe, Fronted

console.log(joined)