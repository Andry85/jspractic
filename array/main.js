
console.log(Array.of(3));
console.log(Array.from('foo'));


const additionalList = [100, 300, 400];

const finalList = [1,...additionalList, 2,4,8];

console.log(finalList);


const str = "absdefgagclmnopqrstuvxyz";

const aplhabit = [...str];

console.log(aplhabit);


const players = ['Ivanov', 'Petrov', 'Crishin', 'Bobko', 'Ronaldo', 'Ibrahimovitch'];

console.table(players);

players.forEach((item, index) => {
    console.log('Player', index + ': ' + item);

});

console.log('--------------------------------------- MAP ---------------------------------------');

const plyersMap = players.map((item,index) => {
    return item + ': ' + index;
})

console.table(plyersMap);

var map = Array.prototype.map;
var elems = document.querySelectorAll('p');
var values = map.call(elems, function(obj) {
  return obj.innerText;
});

console.table(values);

console.log('--------------------------------------- FILTER ---------------------------------------');

const books = ['alphabet', 'don kihot', 'mario', 'kobzar', 'hi', 're'];

const bigNames = books.filter(item => item.length > 2);

console.table(bigNames);

console.log('--------------------------------------- FIND ---------------------------------------');

const names = ['peter', 'oleg', 'igor', 'ivan', 'danilo'];

let findedElement = names.findIndex(item => item === 'peter');
console.log(findedElement);

console.log('--------------------------------------- EVERY ---------------------------------------');

let years = [1985, 1994, 1855, 1455];

let isless = years.every(item => item < 2000);

console.log(isless);


console.log('--------------------------------------- SOME ---------------------------------------');

let yearsBirth = [1985, 1994, 1855, 1455, 2021];

let isBirth = yearsBirth.some(item => item > 2000);

console.log(isBirth);

console.log('--------------------------------------- REDUCE ---------------------------------------');

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));


console.log('--------------------------------------- FLAT ---------------------------------------');
var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());


const arrr = [1, 2, [3, 4, [5, 6]]];

function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

console.log(flatDeep(arrr, Infinity));

console.log('--------------------------------------- CONCAT ---------------------------------------');


const candyes = ['roshen', 'avk', 'milkivay'];

const ice = ['krechatik', 'pinokio', 'plombir'];

const sweets = candyes.concat(ice);


console.log(sweets);


console.log('--------------------------------------- Push, pop, shift , unshift ---------------------------------------');

let bread = [];
bread.push(2);

console.log('bread', bread);

bread.push(4);

console.log('bread', bread);

bread.pop();

console.log('bread', bread);

bread.push([5,6]);

console.log('bread', bread);

bread.unshift(56);

console.log('bread', bread);

bread.shift();

console.log('bread', bread);


console.log('--------------------------------------- Slice, splice, fill, copyWithin ---------------------------------------');

let months =  ["January","February","March","April","May","June","July", "August","September","October", "April", "November","December"];

let winter = months.slice(0, 2);

console.log(winter);


let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let drinkingBeer = daysOfWeek.splice(5, 0, 'Good day');

console.log(drinkingBeer);

console.log(daysOfWeek);


daysOfWeek.fill('Sunday', 1, 4);

console.log(daysOfWeek);


let abs = [1,2,3,4,5];

console.log(abs.copyWithin(2,3));

console.log('--------------------------------------- indexOf, lastIndexOf, includes, sort, reverse ---------------------------------------');


console.log(months.indexOf("April"));
console.log(months.lastIndexOf("April"));

console.log(months.includes("June", 100));


let numbers = [33,4,1111,222];

console.log(numbers.sort());

console.log(numbers.sort(function(a,b) {
  return a - b;
}));

console.log(months.sort());


let monthsSort = months.sort(function(s,t) {
  let a = s.toLowerCase();
  let b = t.toLowerCase();

  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;

});

console.log(monthsSort);


const arrayStrings = ['one', 'two', 'three'];

const reversed = arrayStrings.reverse();

console.log('reversed:', reversed);


console.log('--------------------------------------- join ---------------------------------------');

let area = [100, 200, 300, 400, 500];

console.log(area.join());
console.log(area.join(" "));
console.log(area.join(""));
console.log(area.join("--"));
console.log([100, 200, 300, 400, 500].toString());

console.log(Array.isArray({}));


console.log('--------------------------------------- closing ---------------------------------------');

function inc() {
  let count = 0;
  return function() {
    return count++;
  }
}

let counter = inc();

console.log(counter);

console.log(counter());
console.log(counter());



