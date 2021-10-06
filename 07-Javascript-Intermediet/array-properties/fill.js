const numbers = [1, 2, 3, 4]

//ganti semua item dalam array mulai dari index ke 1
// sampai dengan index paling akhir menjadi 0

const filled = numbers.fill(0, 1, numbers.length)
console.log(numbers)
console.log(filled)
