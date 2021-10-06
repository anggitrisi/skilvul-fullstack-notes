const url = "https://randomuser.me/api/?results=10";

fetch(url,{
  method: 'GET'
})
// variable resp diparsing ke json
// hasil response data diekstrak(bodynya) kedalam bentuk json
.then((resp) => resp.json()) 
 // hasil parsing json ditampilkan dengan console.log
.then(function(data){
  console.log(data);
})
.catch(function(error){
  console.log(error);
})