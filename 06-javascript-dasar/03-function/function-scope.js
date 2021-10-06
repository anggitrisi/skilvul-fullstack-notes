
console.log('Javascript Scope')
console.log('----------------')

// global scope - buku{}
const buku = {
  'judul' : 'Man`s` search for meaning',
  'penulis' : 'victore'
}

function tanyaBuku (){
  console.log(`Apakah benar buku ${buku.judul}, ditulis oleh ${buku.penulis} ?`)
}

tanyaBuku()
console.log(buku)

console.log('---------------------------------')


// local scope buku2{}
function tanyaBuku (){
  const buku2 = {
    'judul' : 'Man`s` search for meaning',
    'penulis' : 'victore'
  }
  console.log(`Apakah benar buku ${buku2.judul}, ditulis oleh ${buku2.penulis} ?`)
}

tanyaBuku()
console.log(buku2)


