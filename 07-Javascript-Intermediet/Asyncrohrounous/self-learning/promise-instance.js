fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json()) // Jika data berhasil didapatkan
  .then((json) => console.log(json))
  .catch((error) => console.log(error)) // Jika data tidak berhasil didapatkan
  .finally(() => {
    console.log(
      "Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected"
    ); // Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected
  });