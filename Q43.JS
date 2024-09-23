// 43.Write a function that counts the number of properties in an object

function countProperties(obj) {
  return Object.keys(obj).length;
}

const person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

console.log(countProperties(person)); //  3
