//function biasa
function ucapan(pembeli,produk){
  return "Terimakasih " + pembeli + ", telah membeli produk " + produk
}

console.log(ucapan("anggi", "buku"))

//function on variable
const ucapan2 = function(pembeli,produk) {
  return "Terimakasih " + pembeli + ", telah membeli produk " + produk
}

console.log(ucapan2 ("anggi", "buku"))

//arrow function
const ucapan3 = (pembeli,produk) =>  "Terimakasih " + pembeli + ", telah membeli produk " + produk

console.log(ucapan3 ("anggi", "buku"))