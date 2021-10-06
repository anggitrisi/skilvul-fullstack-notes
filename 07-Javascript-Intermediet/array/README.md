## Mendeklarasikan Array
- object literal
  ```
  let mahasiswa = ['shinichi','anggi']
  ```
- new Array()
  ```
  let mahasiswa = new Array('shinichi','anggi')
  ```

## Mengakses elemen dalam array
- salah satu
  ```
  mahasiswa[0] // Output : shinichi
  ```
- terakhir
  ```
  mahasiswa[mahasiswa.length-1]
  ```

  ## Array built-in method
  - toString
  ```
  mahasiswa.toString() // Output: shinichi, anggi
  ```
  - join
  ```
  mahasiswa.join('-') // Output: shinichi-anggi
  ```
  - pop, push, shift, unshift
  ```
  mahasiswa.pop() // Output: shinichi
  mahasiswa.push('dimas') // Output: shinichi, anggi, dimas 
  mahasiswa.shift() // Output: anggi
  mahasiswa.unshift('dimas') // Output: dimas, shinichi, anggi
  ```
  
  - slice()
  - splice()
  - concat()
  - sort()
  - reverse()
