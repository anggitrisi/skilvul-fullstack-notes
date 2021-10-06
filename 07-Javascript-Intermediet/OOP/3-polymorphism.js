class Animal {
  animalSound(){
    console.log("Binatang membuat suara")
  }
}

class Cat extends Animal {
  animalSound(){
    console.log("Meow")
  }
}

let persiaCat = new Cat();
let elephant = new Animal();

persiaCat.animalSound()
elephant.animalSound()