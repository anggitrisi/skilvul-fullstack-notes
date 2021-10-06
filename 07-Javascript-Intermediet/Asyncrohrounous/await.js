// apakah bisa mengambil hasil resolve tanpa menggunakan then?

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 2000)
} )

promise
  .then(data => console.log(data))

// memakai await harus didalam function dan functionnya harus async

async function main(){
  const data = await promiseconsole.log(data)
}

main()