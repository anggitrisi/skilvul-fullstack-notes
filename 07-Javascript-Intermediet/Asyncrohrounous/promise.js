const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Error from promise")
  }, 2000)
})