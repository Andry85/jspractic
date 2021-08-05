import {PIM, degree, a as A, GoHome} from './module.js';
import {pete} from './1.js';
import {changedName} from './2.js';
import * as see from './see.js';
import {default as User, sayHi} from './user.js';
import * as regexp from './regexp.js';

console.log(PIM);

console.log(degree(125));


console.log(changedName);


console.log(A);


console.log(this);

console.log(see.mee);
console.log(see.mystr);
console.log(see.arr);

console.log(new User('John'));



console.log(GoHome());


let map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"

console.log(map.size); // 3


let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
  ]);
  
  // перебор по ключам (овощи)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
  }
  
  // перебор по значениям (числа)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // перебор по элементам в формате [ключ, значение]
  for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    console.log(entry); // огурец,500 (и так далее)
  }


  recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // огурец: 500 и так далее
  });

let set = new Set();

let john = { 
    name: "John",
    age: 12
};
let peter = { name: "Pete",
                age: 12
 };
let mary = { name: "Mary",
             age: 44
};

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(peter);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // John (потом Pete и Mary)
    console.log(user.age);
}


function unique(arr) {
    /* ваш код */

    let set = new Set(arr);
    return set;

  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare,Krishna,:-O


let mapK = new Map();

mapK.set("name", "John");

let keys = [];

console.log(mapK.keys());

for (let item of mapK.keys()) {
    keys.push(item);
  }

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys);

var buffer = new ArrayBuffer(16);

if (buffer.byteLength === 16) {
  console.log("Да, это 16 байт.");
} else {
  console.log("О нет, размер не наш!");
}

var int16View = new Int16Array(buffer);

for (var i = 0; i < int16View.length; i++) {
  console.log('Entry ' + i + ': ' + int16View[i]);
}

const inputElement = document.getElementById("input");

if (inputElement) {
  inputElement.addEventListener("change", handleFiles, false);
  function handleFiles() {
    const fileList = this.files; /* now you can work with the file list */
    console.log(fileList[0]);
  }
}


console.log(regexp.showstrReg);
console.log(regexp.replaceLet);
console.log(regexp.testLet);



