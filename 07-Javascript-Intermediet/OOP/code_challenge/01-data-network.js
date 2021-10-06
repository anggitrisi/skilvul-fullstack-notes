class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
    
  }

  movieTime(){
    const dataUsed = 5 * this.users;
    return (this.data - dataUsed) >= 50;
  }

  videoCall(){
    const dataUsed = 5 * this.users;
    return (this.data - dataUsed) >= 10;
  }

  connection(){
    setInterval(function(){ console.log("You must reconnect the Internet Connection"); }, 2000);
  }
}

const library = new Network(50, 8) 

console.log(library.movieTime()) // returns false
console.log(library.videoCall()) // returns true
library.connection(); // Run the interval
