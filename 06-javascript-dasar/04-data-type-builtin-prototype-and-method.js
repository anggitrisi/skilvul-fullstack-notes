//primitive data type
let a = 1000
let b = null
let c ;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

//non_primitive data type - object
let siswa = {
  nama : "anggitri",
  alamat : "Medan"
}
console.log(typeof(siswa.nama))

//non_primitive data type - array
let list_mobil = ["Volvo", "Suzuki", "Kijang"]
console.log(typeof(list_mobil))
console.log(list_mobil[0])

//
console.log("=====================")
let d = "Agus"
console.log(typeof(d))

d = 1000
console.log(typeof(d))

// pendefinisian string bisa berbeda=beda
console.log("==pendefinisian string bisa berbeda=beda===")
let string1 = "Agus";
let string2 = 'Agus';

let string3 = `Agus`;
let string3_1 = `${string2} Agus`; //keuntungan sring dengan backtip bisa mengincludekan string didalam string


let string4 = new String("Agus");
console.log(typeof string1, typeof string2)

// string merupakan array
console.log("==string merupakan array==")
let text = "Udin"
console.log(text.charAt(2)) // chartAt - mengambil didalam string index ke dua => i


//mengambil string dapat dengan 2 cara (Character Access)
//cara1-nonmethod = seperti memanggil index untuk array
console.log(text[1])
//cara2
console.log(text.charAt(2)) // chartAt - mengambil didalam string index ke dua => i


//Comparing String
console.log("=====================")
let text_satu= "A"
let text_dua = "B"

if (text_satu< text_dua) { // true
  console.log(text_satu+ ' is less than ' + text_dua)
} else if (text_satu> text_dua) {
  console.log(text_satu+ ' is greater than ' + text_dua)
} else {
  console.log(text_satu+ ' and ' + text_dua + ' are equal.')
}

//comparing text function
console.log("=====================")

let teks_1 = "Udin"
let teks_2 = "Agus"

function isEqual(str1, str2)
{
  return str1.toUpperCase() === str2.toUpperCase //perlu diUpperCase atau diLowerCasekan dulu agar memastikan tidak ada huruf yang besar kecil dalam teksnya karena ketika comparing string itu case sensitive
}
console.log(isEqual(teks_1, teks_2))


//String Primitve and String Object
console.log("=====================")
let s_prim = 'foo'  //didefinisikan sebagai string
let s_obj = new String(s_prim) //didefinisikan sebagai object of string

//keunggulannya?
let s1 = '2 + 2 + 5'
let s2 =  new String ('2 + 2')
console.log(eval(s1)) // 9, string didalam bisa dijumlahkan dan jadi number
console.log(eval(s2)) // [String: '2 + 2']
console.log(eval(s2.valueOf())) //4


console.log(typeof s_prim) // Logs "string"
console.log(typeof s_obj)  // Logs "object"


/* Beda Method dan Function

- sama sama mengembalikan nilai
- tetapi Method sudah di build/sudah tersedia dari javascriptnya sedangkan function kita definisikan sendiri

*/

// Long Literal String
// kalau kita punya tulisan yang sangat panjang

let long_text =   "Sometimes, your code will include strings which are very long. \ Rather than having lines that go on endlessly, or wrap at the whim of your editor, \ you may wish to specifically break the string into multiple lines in the source code without affecting the actual string contents\ There are two ways you can do this"
console.log(long_text)

let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."
console.log(longString)

// String slicing
console.log("=====================")

let text_3 = "The quick brown for jumps over the lazy dog."

console.log(text_3.slice(25))
console.log(text_3.slice(25, 30))
console.log(text_3.slice(-4))
console.log(text_3.slice(0,3))
console.log(text_3.slice(-3,-1))

// String split
let text_4 = "The quick brown for jumps over the lazy dog."

console.log(text_4.split(" "))

let list_unit = "UNIT1;UNIT2;UNIT3"

console.log(list_unit.split(";"))

// String trim
// Remove white space from beginning and end string
let text_5 = "            AGUS        "
console.log(text_5)

console.log(text_5.trim())

//String concat, menggabungkan antara string satu dengan string lain
let t1 = "Unit1"
let t2 = "Unit2"
let t3 = "Unit3"

console.log(t1.concat(";", t2,";",t3))
let final_text = t1 + ";" + t2
//let final_text = $




//number
let number_a = 123
let number_b = 123.0

console.log(number_a === number_b)  

//mengubah teks jadi angka
let number_c = '123'
console.log(typeof(number_c))
console.log(typeof(Number(number_c)))
console.log(Number(undefined))
console.log(Number("agus"))
console.log(Number("123"))

//isNaN
//Not a Number
console.log(isNaN("123"))
console.log(isNaN("agus"))

//Math

console.log(Math.PI)
console.log(Math.round(3.6))
console.log(Math.min(1,-2,4))












