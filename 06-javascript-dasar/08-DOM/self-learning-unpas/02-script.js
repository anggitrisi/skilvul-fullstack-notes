const section2 = document.getElementById('bagian-2');
const p = section2.querySelector('p');
p.style.backgroundColor = 'green';

// atau

const section2b = document.querySelector('section#bagian-2')
const p_b = section2.getElementsByTagName('p');
p_b[0].style.color = 'white';