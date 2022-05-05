
// objet to string
const obj = {name: "John", age: 30, city: "New York"};
const myJSON1 = JSON.stringify(obj);
console.log(myJSON1);

//array to string
const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON2 = JSON.stringify(arr);
localStorage.setItem('mivalor', myJSON2);

//string to json
const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr);


const text2 = localStorage.getItem('mivalor');
const myObject = JSON.parse(text2);
console.log(myObject);