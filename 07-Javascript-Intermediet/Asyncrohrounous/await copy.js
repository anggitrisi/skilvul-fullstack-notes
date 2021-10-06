// apakah bisa mengambil hasil resolve tanpa menggunakan then?

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error from Promise")
  }, 2000)
} )

promise
  .then(data => console.log(data))
  .catch(reason => console.log(reason))


// memakai await harus didalam function dan functionnya harus async

async function main(){
  try {
    const data = await promise
    console.log(data)
  } catch(e){
    console.log(e)
  }
}

main()