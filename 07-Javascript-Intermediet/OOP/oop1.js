let person1 ={
  name: "Chris Yeo",
  age: 25,
  detail: function(){
    return `${this.name} berusia ${this.age}`
  } // this berfungsi untuk memanggi variabel name yang ada diobjeknya
}
console.log(person1.detail());

// OOP Function
function Person2 (name, age){
  this.name = name; // this membuat key object name bisa diakses dari luar
  this.age = age;
  this.detail = function(){
    return `${this.name} berusia ${this.age}`;

  }
}

console.log(person.name)

// OOP Class
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  detail(){
    return this.detail = function(){
      return `${this.name} berusia ${this.age}`;
  }
}

let person1 = new Person('David', 26);
