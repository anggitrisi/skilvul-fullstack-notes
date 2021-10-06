console.log("Hello from JS")

// select any element
var itemsContainer = document.getElementById('languageSelect');
var firstLanguage = document.querySelector('.language');
var languages = document.querySelectorAll('.language');
var itemsByName = document.getElementsByName('language')
var itemsByClass = document.getElementsByClassName('language')
var itemsByTag = document.getElementsByTagName('option')


// console.log(languageSelect);
// console.log(firstLanguage);
// console.log(languages);
// console.log(itemsByName);
// console.log(itemsByClass); 
// console.log(itemsByTag); 
 

// select parent element
var itemsContainerParent = itemsContainer.parentNode;

// console.log(itemsContainerParent)


// select children elements
var itemsContainerChildren = itemsContainer.children;
var itemsContainerChildrenNodes = itemsContainer.childNodes;
var itemsContainerChildrenQuery = itemsContainer.querySelectorAll('*');
var itemsContainerFirstChild = itemsContainer.firstElementChild;
var itemsContainerFirstChild1 = itemsContainer.firstChild;
var itemsContainerLastChild = itemsContainer.lastElementChild;
var itemsContainerLastChild1 = itemsContainer.lastChild;
var itemsContainerNChlidren  = itemsContainer.children[1];



console.log(itemsContainerChildren);
console.log(itemsContainerChildrenNodes);
console.log(itemsContainerChildrenQuery);
console.log(itemsContainerFirstChild);
console.log(itemsContainerFirstChild1);
console.log(itemsContainerLastChild);
console.log(itemsContainerLastChild1);
console.log(itemsContainerNChlidren);









// selec  unction(){
//   const title = document.getElementById("title";
//   title.textContent = "Belajar Dom #" + counter;
//   counter++
// )});

// const listElement = document.getElementById("list")
// const childNodes = listElement.childNodes
// const lastNode = childNodes[3]
// listElement.removeChild(lastNode)

let counter = 0;

btn.addEventListener("click", function(){
  const title = document.getElementById("title";
  title.textContent = "Belajar Dom #" + counter;
  counter++
)})

const listElement = document.getElementById("list")
const childNodes = listElement.childNodes
const lastNode = childNodes[3]
listElement.removeChild(lastNode)