// DOM Selection
// getElementById -> mengembalikan element

const judul = document.getElementById('judul')
judul.style.color = 'red'; // dengan menggunakan js kalau kita ngasih style ke elemen itu otomati menambahkan inline css
judul.style.backgroundColor = '#dedede';
judul.innerHTML = 'Anggitri Sihombing'
console.log(judul)

// document.getElementsByTagName()
// -> HTMLCollection
const p = document.getElementsByTagName('p')
for (let i = 0; i < p.length; i++){ 
  p[i].style.backgroundColor = 'lightblue'
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0]
p1.innerHTML = "Ini diubah dari javascript"
