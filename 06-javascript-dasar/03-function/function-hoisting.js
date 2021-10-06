
console.log('Javascript Hoisting')
console.log('-------------------')
// kita bisa memanggil fungsi dulu baru dideklarasikan

tanyaBuku()

function tanyaBuku (){
  const buku = {
    'judul' : 'Man`s` search for meaning',
    'penulis' : 'victore'
  }
  console.log(`Apakah benar buku ${buku.judul}, ditulis oleh ${buku.penulis} ?`)
}


// hoisiting nggak berlaku kalau fungsi ada didalam variabel
tanyaBuku2()

let tanyaBuku2 = function (){
  const buku = {
    'judul' : 'Man`s` search for meaning',
    'penulis' : 'victore'
  }
  console.log(`Apakah benar buku ${buku.judul}, ditulis oleh ${buku.penulis} ?`)
}




