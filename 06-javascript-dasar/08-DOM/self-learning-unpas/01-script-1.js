// DOM Selection
// document.getElementById() -> element
// document.getElementsByTagName() -> HTMLCollection
// documenet.getElementsByClassName() -> HTMLCollection


// document.querySelector()
// -> element
const p4 = document.querySelector('#bagian-2 p')
p4.style.color = 'green'
p4.style.fontSize = '30px';

const item2 = document.querySelector('#bagian-2 ul li:nth-child(2)');
item2.style.backgroundColor = 'orange';

// const p = document.querySelector('p'); // hanya mengembalikan elemen p pertama 
// p.innerHTML = "Ini diubah oleh javascript" 




/// document.querySelectorAll()
const p = document.querySelectorAll('p');
for (let i=0; i < p.length; i++){
  p[i].style.backgroundColor = 'lightblue' ;
}
