console.log('---------------------rest parameters---------------------');

function showClients(...argsList) {
  let sum = 0;
  for(let i of argsList) {
    sum += i;
  }
  return sum;
}

console.log(showClients(1,4,5,6,9));


console.log('---------------------spread arguments ---------------------');

let arr = [3, 5, 1];

console.log(Math.max(...arr));

const a = [[1], [2], [3]];
const b = [...a];


console.log(b.shift().shift());

console.log('--------------------- Higher-Order Function ---------------------');

const square = function(x) {
  return x * x;
}

console.log(square(5));

const foo = square;

console.log(foo(6));

function formalGreeting() {
  console.log("How are you?");
}
function casualGreeting() {
  console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
  if(type === 'formal') {
    greetFormal();
  } else if(type === 'casual') {
    greetCasual();
  }
}
// выводит 'What's up?'
console.log(greet('casual', formalGreeting, casualGreeting));


const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}
const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});
// выводит [ 10, 6, 3, 4, 1 ]
console.log(lenArray);

function callCount(fn) {
  let count = 0

  return (...args) => {
    console.log(`This function has been called ${count++} times`)
    fn(...args)
  }
}

const add = (x, y) => x + y;
const addCount = callCount(add);

addCount(2, 4) // This function has been called 1 times
addCount(7, 5) // This function has been called 2 times
addCount(2, 4) // This function has been called 3 times


// let addNumber = (a, b) => a+b;
// let increment = addNumber.bind(null,1);
// let incrementBy2 = addNumber.bind(null,2);
// console.log('Increment 3 by 2:',incrementBy2(3));
// //=> Увеличиваем 3 на 2: 5
// console.log('Increment 3 by 1:',increment(3));
// //=> Увеличиваем 3 на 1: 4


let addNumberAgain = function(x) {
  return function(y) {
    return x + y;
  }
};
let incrementNew = addNumberAgain(1);
let incrementBy2New = addNumberAgain(2);
console.log('Increment 3 by 1:',incrementNew(3));
//=> Увеличиваем 3 на 1: 4
console.log('Increment 3 by 2:',incrementBy2New(3));
//=> Увеличиваем 3 на 2: 5

function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

// console.log( curriedSum(1, 2, 3) ); // 6, всё ещё можно вызывать нормально
// console.log( curriedSum(1)(2,3) ); // 6, каррирование первого аргумента
console.log( curriedSum(1)(2)(3) ); // 6, каррирование всех аргументов