// encapsulation pada pricePerKm
function Gojek(jarak){
  const pricePerKm = 50000; // tidak menggunakan this
  this.jarak = jarak;

  this.price = function(){
    return pricePerKm * this.jarak;
  };
}

let perjalanan1 = new Gojek(2);
let perjalanan2 = new Gojek(10);


console.log(perjalanan1.harga())
console.log(perjalanan2.harga())
