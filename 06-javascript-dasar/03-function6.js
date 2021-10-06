// function ubahTulisan(teks){
//   return toLowerCase(teks)
// }

// console.log(ubahTulisan("ANGGI"))

const name = "Jose"
String.prototype.addSuffix = function (suffix){
  //Jose Sitanggang
  return this + " " + suffix;
}
console.log(name.)