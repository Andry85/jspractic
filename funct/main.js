let calculator = {
  operand1: 1,
  operand2: 1,
  add() {
    this.result = this.operand1 + this.operand2;
  }
}

calculator.add();
console.log(calculator.result);


console.log('------------------- closers ----------------------');

let scope = "global scope";

function checkskope() {
  let scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}

let result = checkskope()();

console.log(result);


let uniqueInteger = (function() {
  let counter = 0;
  return function() {
    return counter++;
  }
}());

console.log(uniqueInteger());
console.log(uniqueInteger());

function counter() {
  let n = 0;
  return {
    count: function() {
      return n++;
    },
    reset: function() {
      n = 0;
    }
  }
}

let c = counter(), d = counter();

console.log('------------------- counter ----------------------');

console.log(c.count());
console.log(d.count());
c.reset();
console.log(c.count());
console.log(d.count());

console.log('------------------- counter with get and set ----------------------');

function counterCustome(n) {
  return {
    get count() {
      return n++;
    },
    set count(m) {
      if (m > n) n = m;
      else throw Error("counter can be installed in more number");
    }
  }
}

let myCounter = counterCustome(10);
console.log(myCounter.count);
console.log(myCounter.count);
console.log(myCounter.count = 25);
console.log(myCounter.count);
console.log(myCounter.count);


console.log('------------------- function length, name, prototype ----------------------');

function openPopup (width, height, border) {

}

console.log(openPopup.length);
console.log(openPopup.name);
console.log(openPopup.prototype);


console.log('------------------- call, apply ----------------------');

let box = {
  width: 20,
  height: 20
};

function calcSquera(w, h) {
  return w * h;
}

console.log('call', calcSquera.call(box, box.width, box.height));
console.log('apply', calcSquera.apply(box, [box.width, box.height]));


console.log('------------------- bind, currying  ----------------------');

function f(y) {
  return this.x + y;
}

let element = {
  x: 1
}

let g = f.bind(element);

console.log(g(4));


function currying(y,z) {
  return this.x + y + z;
} 

let callCarrying = currying.bind({x: 1}, 2);

console.log(callCarrying(5));


var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};


var greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"

greetCurried("Hi there")("Howard");


function not(f) {
  return function (...args) {
      let result = f.apply(this, args);
      return !result;
  }
}

const even = x => x % 2 === 0;

const odd = not(even);

console.log([1,2,3,5,5].every(odd));


function compose(f,g) {
  return function (...args) {
    return f.call(this, g.apply(this, args));
  }
}

const sum = (x,y) => x+y;
const square = x => x*x;
console.log(compose(square, sum)(2,3));


function partialLeft(f, ...outerArgs) {
  return function(...innerArgs) {
    let args = [...outerArgs, ...innerArgs];

    return f.apply(this, args);
  }
}

function partialRight(f, ...outerArgs) {
  return function(...innerArgs) {
    let args = [...innerArgs, ...outerArgs];

    return f.apply(this, args);
  }
}

function partial(f, ...outerArgs) {
  return function(...innerArgs) {
    let args = [...outerArgs];

    let innerIndex = 0;

    for (let i = 0; i < args.length; i++) {
      if (args[i] === undefined) {
        args[i] = innerArgs[innerIndex++];
      }
    }

    args.push(...innerArgs.slice(innerIndex));
    return f.apply(this, args);
  }
}


const pF = function(x,y,z) {
  return x * (y-z);
}

// console.log(partialLeft(pF, 2)(3,4));

console.log(partialRight(pF, 2)(3,4));

console.log(partial(pF, undefined, 2)(3,4));


const increment = partialLeft(sum, 1);

console.log(increment(2));


// уже знакомая нам функция memoize
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log('Fetching from cache', n);
      return cache[n];
    }
    else {
      console.log('Calculating result', n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}
const factorial = memoize(
  (x) => {
    if (x === 0) {
      return 1;
    }
    else {
      return x * factorial(x - 1);
    }
  }
);
console.log(factorial(5)); // вычислено
console.log(factorial(6)); // вычислено для 6, но для предыдущих значений вз