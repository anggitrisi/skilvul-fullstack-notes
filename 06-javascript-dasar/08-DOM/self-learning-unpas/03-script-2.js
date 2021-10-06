// DOM Manipulation


// buat element
//* appendChild()

// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru //!di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru)



// buat element 
//* insertBefore()

// buat element li baru
const liBaru = document.createElement('li');
liBaru.innerText = "item baru" 
// atau 
// teksLi = document.createTextNode('Paragraf baru')
// liBaru.appendChild(teksLi)

// cari parent dari tempat li yang akan ditambahkan -> ul dalm section id b
const ul = document.querySelector('section#b ul'); 
// cari li dibawah li yang akan ditambahkan
const li2 = ul.querySelector('li:nth-child(2)');
// tambahkan dengan insertBefore()
ul.insertBefore(liBaru, li2);


// hapus
//* removeChild()

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);


// replace

// tangkap parent 
const sectionB = document.querySelector('section#b');
// ambil yang mau diganti
const p = sectionB.querySelector('p');
// buat element baru untuk pengganti
const h2Baru = document.createElement('h2');
const isiH2 = document.createTextNode('Judul Baru') ;
h2Baru.appendChild(isiH2);

// replaceChild()
sectionB.replaceChild(h2Baru,p)

// ubah warna yang dimanupulasi
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';


