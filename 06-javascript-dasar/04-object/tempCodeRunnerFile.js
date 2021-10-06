// Ada 2 cara mendeklarasikan object

// cara1- secara literal
manusia = {
  nama : "Anggi",
  pekerjaan : "mahasiswa",
  displayTanggalLahir : function() {
    console.log ('03 Maret 2001')
  } 
}

console.log(manusia.nama)
console.log(manusia['nama'])
// console.log(${manusia.nama})

manusia.displayTanggalLahir()
