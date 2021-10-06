const condition = false;

let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    // apa yang dilakukan jika promise 'fulfilled'
    resolve("Berhasil");
  } else {
    // apa yang dilakukan jika promise 'rejected'
    reject(new Error("Error Gagal"));
  }
});

newPromise
  .then((result) => {
  console.log(result);
})
  .catch((error) => {
  console.log(error.message); // Output: "Error Gagal"
});

