/*
DOcument Object Model yaiut sebuah data yang merepresentasikan sebuah objek

DOM -> menjadi API yang kita gunakan untuk

-> membuat struktur HMTL

-> DOM untuk memanipulasi struktur HTML kita

Objektive:
1. mengerti bagaimana browser merender document

2. 

3.

4. berinteraksi dengan event


===
Proses rendering dari WEB dibalik layar
HTML->parsing->tokens->DOM

DOM berbentuk objek jadi bisa diakses oleh javascriptx

?*/


//get element by tag


// get element by id

const myTarget =  document.getElemenyById("taget")
myTarget
myTarget.firstElementChild

// get element by class
const heading = document.getElementsByClassName
('heading') // Array
heading[0]
heading[1]
heading[0].firstElementChild

// get element by query selector
document.querySelector("#target")
document.querySelector(".heading")

//mengubah konten elemen
const el = document.getElementsByClassName("heading")[1]
el
el.textContent = "Updated COntent"
el.innerHTML

