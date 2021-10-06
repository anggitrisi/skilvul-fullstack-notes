fetch("https://randomuser.me/api/?results=10")
  .then((resp) => resp.json()) 
  .then(function (data){
    console.log(data);
})
  .catch(function(error){
    console.log(error);
})