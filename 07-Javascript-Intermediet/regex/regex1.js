const x ="monkeys"
console.log(x == "monkeys")
const re = new RegExp("monkeys")
console.log(re.test("monkeys"))
console.log(re.test("monkeysxx"))

// mengecek apakah suatu string mengandung angka
//? belum berhasil
const re2 = new RegExp('d')
re2.test("12")
console.log(re2.test('12'))

//? belum berhasil
const re3 = /d/
console.log(re3.test(12))

//* 
const re4 = /[0-9]/ 
const textTarget = "Halo 12"
console.log(textTarget.match(re4))

let myRegex = /d/;
let myName = 'David Winalda';
console.log(myName.match(myRegex));

const a = /d/ig;
console.log(myName.match(a));


