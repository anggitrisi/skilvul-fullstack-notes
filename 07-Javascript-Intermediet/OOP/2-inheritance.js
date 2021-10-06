class Car {
  constructor(mesin, tipe, nama_mobil){
    this.mesin = mesin;
    this.tipe = tipe;
    this.nama_mobil = nama_mobil
  }

  detail(){
    return `mesin mobil ${this.mesin}, tipe ${this.tipe}, nama mobil ${this.nama_mobil}`
  }
}

class Tesla extends Car {
  constructor(mesin, tipe, nama_mobil,jumlah_pintu){
    super(mesin, tipe, nama_mobil)

    this.jumlah_pintu = jumlah_pintu

  }
}

let car1 = new Tesla('Mesin A', 'MX', 'Tesla Super Car', 3)

console.log(car1.mesin)
console.log(car1.tipe)
console.log(car1.nama_mobil)
console.log(car1.jumlah_pintu)