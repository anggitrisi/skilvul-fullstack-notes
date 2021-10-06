condition = true
let newPromise = new Promise((resolve,reject) => {
  if(condition){
    // jika fulfilled
    resolve("Berhasil")
  } else {
    // jika rejected
    reject("Gagal")
  }
});

// memanggil promise dengan .then()
// newPromise.then((result)=>{
//   console.log(result)
// })

// memanggil .then() lebih dari 1 kali
newPromise.then((result)=>{
  return result;
})
.then((result)=>{
  console.log(result + "!!")
})
