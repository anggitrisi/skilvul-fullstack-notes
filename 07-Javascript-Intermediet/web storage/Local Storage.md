# Local Storage

Local Storage
merupakan sebuah penyimpanan data yang tidak memiliki masa expired jadi data tersebut akan tetap tersimpan dalam host sampai kita melakukan delete item.
Datanya berupa json yang dikonversi jadi string (tipe data hanya boleh string)
Maksimum data yang disimpan : 5 MB (text)

contohnya : berita-berita, profile kita sehingga tidak harus disimpan di backend / server dan menyebabkan traffic backend meningkat. Local storage membantu pekerjaan backend ketika harus mengambil dari backend ke frontend.

## Session Storage

menyimpan data hanya dalam satu session saja.
Maksimum data yang disimpan : 5 MB (text)

- sama halnya seperti local tetapi data yang disimpan dapat expired. Data hanya dapat digunakan saat masih ada sesi.
- contoh saat mengolah data statistik, hasil prosessnya akan disimpan di sessions storage.

## Cookie

merupakan storage yang paling kecil, hanyda dapat menampung 4KB text. Paling baik digunakan untuk menyimpan access token karena cookie paling aman sebab tidak data tidak langsung disimpan seperti halnya pada local dan session storage.
