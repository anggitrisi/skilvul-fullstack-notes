const result = fetch('')

// kode a
result
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))

// kode b
// kode a sama b hasilny sama tetapi pendekatannya yang bebeda
async function getToDo() {
  try{
    const result = await fetch('https://')
    const json = await result.json()
    const data = await json
    console.log(data)
  } catch(err){
    console.error(err)
  }
}

getToDo