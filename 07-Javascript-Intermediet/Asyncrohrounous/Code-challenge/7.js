let onFulfill = value => {console.log(value)};
let onReject = reason => {console.log(reason)};
 
const thePromise =  new Promise( (resolve, reject) => {
  if (false) {
    resolve('success value');
  } else {
    reject();
  }
});
 
thePromise.then(onFulfill, onReject);
