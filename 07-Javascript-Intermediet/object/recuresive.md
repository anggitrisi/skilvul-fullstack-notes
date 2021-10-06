/*
rekursive adalah sebuah funsgi yang memanggilnya diri sendiri sampai kondisi tertentu

recursive banyak digunakan dalam hal-hal yang kompleksitasnya tinggi seperti matematika, kalkulasi, dan fisika

misal:
memperhitungkan sebuah data yang sangat besar tidak bisa digunakan dengan for looping biasa tapi perlu menggunakan recursive
*/

function recursive() {
  //
  recursive()
  //
}

function recursive() {
  ...
}

* dalam recursive pasti ada parameter, parameter ini lah yang menjadi nilai iterasinya

function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countdown(nexNumber);
  }
}

