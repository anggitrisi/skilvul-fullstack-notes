let status = state => {
  return new Promise(function(resolve, reject) {
    if (state) { 
      resolve('success'); 
    } else { 
      reject('error');
    }
  });
}
 
let promiseChain = status(true);
 
promiseChain
.then( data => {  
   console.log(data + " 1");
   return status(true);
})
.then( data => {
   console.log(data+ " 2");
   return status(true);
});
