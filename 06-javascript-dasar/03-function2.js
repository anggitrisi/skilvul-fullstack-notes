const person = {
  name : "Anggi",
  score : 90,
  myScore: () => { //method
    // scope:local (milik myScore)
    console.log(this.score) //this merujuk pada objek person
  },
  sayHello: function() {
    // scope: parent object
    console.log("Hi, I'm "
    +this.name);
  },
  sayHelloEvery: function(second){
    let counter =0;
    setInterval(
      () => {
        console.log("counter: ", ++counter)
        this.sayHello()
      }
      , second * 1000);
    
  }
}