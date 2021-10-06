class Hero {
  constructor(hp){
    this.healthPoint = hp
  }

  attack(){
    this.healthPoint -= 50
    return this.healthPoint 
  }

  recovery(){
    this.healthPoint += 100
    return this.healthPoint
  }
}

let ursa = new Hero(1000)

for (let index = 0; index < 10; index++){
  console.log(ursa.attack())
}
