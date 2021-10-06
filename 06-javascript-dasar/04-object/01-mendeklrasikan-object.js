// Ada 2 cara mendeklarasikan object

// cara1 - dengan object literal
const manusia = {
  nama : "Anggi",
  pekerjaan : "mahasiswa",
  displayTanggalLahir : function() {
    console.log ('03 Maret 2001')
  } 
}
manusia.nama = "Anggitri"
console.log(manusia)

// ada beberapa cara memanggil value dari object
console.log(manusia.nama)
console.log(manusia['nama'])
console.log(`${manusia.nama}`)
manusia.displayTanggalLahir()

// cara2 - dengan key new
const manusia2 = new Object();
manusia2.nama = "Anggi";
manusia2.pekerjaan = "mahasiswa"
console.log(manusia2)

// combining
const manusia3 = {
  nama : 'Anggi'
};

const manusiaA = new Object(
  nama : "Anggi",
  nim : 181402128
);
console.log (manusiaA)

// menambahkan properti baru ke objek manusia3
manusia3.pekerjaan = "mahasiswa"
console.log(manusia3)

// menghapus object property
delete manusia3.nama
console.log(manusia3)
