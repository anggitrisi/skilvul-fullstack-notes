class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.marbleCount = 100;
  }
 
  status() {
    console.log(`Player: ${this.name} -- Marbles Left: ${this.marbleCount}`)
  }

  // gettingHit(){
  //   this.marbleCount = this.marbleCount - this.hitsPerMinute;
  // }
}

function marbleAttack(p1, p2) {
  
  for(let i = 0; i < 10; i++){
    p1.marbleCount -= p2.hitsPerMinute
    p2.marbleCount -= p1.hitsPerMinute
    p1.status();
    p2.status()
  }
  
  if(p1.marbleCount > p2.marbleCount){
    return p1.name;
  } else if(p2.marbleCount > p1.marbleCount) {
    return p2.name;
  }
  return "Tie";
}



const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);
 
console.log(marbleAttack(p1, p2)); // return p1

const p3 = new Player('p1', 5);
const p4 = new Player('p2', 5);
 
console.log(marbleAttack(p3, p4)); // return Tie


