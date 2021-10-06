#### console dalam fungsi dan mengembalikan nilai, apakah wajar
```
const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi';
  const noMessi = 10;
  console.log(olahraga); // Output: basketball
  if (olahraga === 'basketball') {
     atlet = 'Kobe Bryant';
     const noKobe = 24;
     console.log(olahraga); // Output: basketball
  }
  return atlet;
}

console.log(namaAtlet()); // Output: Kobe Bryant
console.log(olahraga); // Output: basketball
```

#### kenapa bisa deklarasi 2 kali variabel dengan nama yang sama, meskipun satunya didalam fungsi

```
let carName = 'Kijang';

function displayCarName() {
  let carName = 'Honda';

  return 'Mobil ini bermerk ' + carName;
}

console.log(displayCarName()); //output: ...

```

