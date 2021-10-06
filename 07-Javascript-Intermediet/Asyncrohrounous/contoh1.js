
// program ini dieksekusi secara syncronous
// console.log("Hello World");
// for(let i=0; i<10; i++){

// }

// console.log("End iof Loop");


// program ini berjalan secara asynchronous
// End of loop langsung dieksekusi setelah hello world tanpa menunggu for diselesaikan
// setTimeOut() - mendelay for.. selama 1 second, 
// setiap proses tidak saling menunggu

console.log("Hello World");
setTimeout(() => { for(let i=0; i<10_000_000_000; i++){
    // console.log(i);
  }
  console.log("ASYNC")
}, 1000)
console.log("End of Loop");