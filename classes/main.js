"use strict";


function Range(from, to) {
  this.from = from;
  this.to = to;

  
}

// Range.prototype = {

//   includes: function(x) {
//     return this.from <= x && x <= this.to;
//   },
//   [Symbol.iterator]: function*() {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//   },
//   toString: function() {
//     return "(" + this.from + "..." + this.to + ")";
//   }
// }

Range.prototype.includes = function(x) {
  return this.from <= x && x <= this.to;
};

Range.prototype[Symbol.iterator] = function*() {
  for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
};

Range.prototype.toString = function() {
  return "(" + this.from + "..." + this.to + ")";
};





let r = new Range(1,3);

console.log(r.includes(2));
console.log(r.toString());

console.log('Range.prototype.constructor', Range.prototype.constructor);




function range(from, to) {
  let r = Object.create(range.methods);
  r.from = from;
  r.to = to;

  
  return r;
}

range.methods = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  toString() {
    return "(" + this.from + "..." + this.to + ")";
  }
}

let r1 = range(1,3);
console.log(r1.includes(2));


class Mange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  includes(x) {
    return this.from <= x && x <= this.to;
  }

  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  toString() {
    return "(" + this.from + "..." + this.to + ")";
  }

}

let m = new Mange(1,3);

console.log(m.includes(2));

class Span extends Mange {
  constructor(start, length) {
    if (length >= 0) {
      super(start, start + length);
    } else {
      super(start + length, start);
    }
  }
}


class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }

  static publisher = "Obama";
}

// использование
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);



console.log(Article.publisher);


class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticMethod());
    // 'вызван статический метод.'

    console.log(this.constructor.staticMethod());
    // 'вызван статический метод.'
  }

  static staticMethod() {
    return 'вызван статический метод.';
  }
}


class Popup {
  static WIDTH = 100;
  static #height = 50;

  static #doubleHeight() {
    return 2 * parseInt(Popup.#height);
  }

  static showWidthHeight() {
    console.log('Popup sizes:', Popup.WIDTH + '*' + Popup.#doubleHeight());
  }
}

console.log(Popup.WIDTH);

console.log(Popup.showWidthHeight());


class Complex {
  #r = 0;
  #i = 0;

  constructor(real, imaginary) {
    this.r = real;
    this.i = imaginary;
  }

  plus(that) {
    return new Complex(this.r + that.r, this.i + that.i);
  }

  times(that) {
    return new Complex(
      this.r * that.r - this.i * that.i,
      this.r * that.i + this.i * that.r
      );
  }

  static sum(c, d) {
    return c.plus(d);
  }

  static product(c, d) {
    return c.times(d);
  }


  get real() {
    return this.r;
  }

  get imagenary() {
    return this.i;
  }

  get magnitude() {
    return Math.hypot(this.r, this.i);
  }

  toString() {
    return `{${this.r}, ${this.i}}`
  }

}

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);


let cc = new Complex(2,3);
let dd = new Complex(cc.i, cc.r);

console.log(cc.plus(dd).toString());


function Field(width, length) {
  this.width = width;
  this.length = length;
}

Field.prototype = {
  area: function() {
    return this.width * this.length;
  }
}

let field_1 = new Field(3, 40);

console.log(field_1.area());


function BasketballField(color, width, length) {
  this.color = color;
  this.width = width;
  this.length = length;
}

BasketballField.prototype = Object.create(Field.prototype);
BasketballField.prototype.constructor = BasketballField;

BasketballField.prototype.toString = function() {
  return `${this.color}`;
}

let field_2 = new BasketballField('green', 100, 5);

console.log(field_2.toString());
console.log(field_2.area());

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   get area() {
//     return this.calcArea();
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Точка";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; //undefined
p1.distance;    //undefined
p2.displayName; //undefined
p2.distance;    //undefined

console.log(Point.displayName);      // "Точка"
console.log(Point.distance(p1, p2)); // 7.0710678118654755


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} издаёт звук.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // вызывает конструктор super класса и передаёт параметр name
  }

  speak() {
    console.log(`${this.name} лает.`);
  }
}

let d = new Dog('Митци');
d.speak(); // Митци лает



class School {
  constructor(name, pupils) {
    this.name = name;
    this.pupils = pupils;
  }

  beginLearning() {
    console.log(`${this.name} starts learning at september`);
  }

  get nameOfSchool() {
    return `${this.name}`;
  }

  set nameOfSchool(newName) {
    this.name = newName;
  }

  static welcomeSchool() {
    return `${this.name} welcome!`;
  }

}

let sokilSchool = new School('Barvinok', 255);
console.log(sokilSchool.nameOfSchool);
sokilSchool.nameOfSchool = 'Pavlin';
console.log(sokilSchool.nameOfSchool);

console.log(School.welcomeSchool());

console.log(sokilSchool.__proto__);
console.log(School.prototype);


class FierslevelSchool extends School {

  constructor(established, ...args) {
    super(established, ...args);
    this.established = established;
  }

  beginLearning() {
    super.beginLearning();
    console.log(`i am colled from FierslevelSchool. The school has been  established ${this.established}`);
  }
}


let BilanySchool = new FierslevelSchool(1968, 'Bilany', 20);
console.log('BilanySchool.beginLearning', BilanySchool.beginLearning());

console.log(BilanySchool);
console.log('FierslevelSchool', FierslevelSchool);

console.log('FierslevelSchool.prototype', FierslevelSchool.prototype);

console.log('FierslevelSchool.prototype.__proto__', FierslevelSchool.prototype.__proto__);

console.log('FierslevelSchool.prototype.__proto__ == School.prototype', FierslevelSchool.prototype.__proto__ == School.prototype);



class Menu {
  constructor(title, items, witdh) {
    this.title = title;
    this.items = items;
    this.width = witdh;
  }

  render() {
    let el = document.createElement('ul');
    for (let item of this.items) {
      let li = document.createElement('li');
      li.append(item);
      el.append(li);
    }
    let body = document.getElementsByTagName('body')[0];
    body.append(el);

  }


}

let myMenu = new Menu('Sidebar menu', ['item 1', 'item 2', 'item 3'], '500px');
myMenu.render();


class PersonClass {

  // еквівалент конструктора PersonType
  constructor(name) {
      this.name = name;
  }

  // еквівалент PersonType.prototype.sayName
  sayName() {
      console.log(this.name);
  }
}

let person = new PersonClass("Nicholas");
person.sayName();   // виводить "Nicholas"

console.log(person instanceof PersonClass);     // true
console.log(person instanceof Object);          // true

console.log(typeof PersonClass);                    // "function"
console.log(typeof PersonClass.prototype.sayName);  // "function"


function createObject(classDef) {
  return new classDef();
}

let obj = createObject(class {

  sayHi() {
      console.log("Hi!");
  }
});

console.log(obj.sayHi());        // "Hi!"


let personA = new class {

  constructor(name) {
      this.name = name;
  }

  sayName() {
      console.log(this.name);
  }

}("Nicholas");

console.log(personA.sayName());  


class CustomHTMLElement {

  constructor(element) {
      this.element = element;
  }

  get html() {
      return this.element.innerHTML;
  }

  set html(value) {
      this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html");
console.log("get" in descriptor);   // true
console.log("set" in descriptor);   // true
console.log(descriptor.enumerable); // false



class MYPersonClass {

  // еквівалент конструктору PersonType
  constructor(name) {
      this.name = name;
  }

  // еквівалент PersonType.prototype.sayName
  sayName() {
      console.log(this.name);
  }

  // еквівалент PersonType.create
  static create(name) {
      return new MYPersonClass(name);
  }
}

let personOleg = MYPersonClass.create("Oleg");

console.log(personOleg.sayName());



function RectangleBig(length, width) {
  this.length = length;
  this.width = width;
}

RectangleBig.prototype.getArea = function() {
  return this.length * this.width;
};

function SquareBig(length) {
  RectangleBig.call(this, length, length);
  console.log(this);
}

SquareBig.prototype = Object.create(RectangleBig.prototype, {
  constructor: {
      value:SquareBig,
      enumerable: true,
      writable: true,
      configurable: true
  }
});

var squareMy = new SquareBig(3);

console.log(squareMy.getArea());              // 9
console.log(squareMy instanceof SquareBig);      // true
console.log(squareMy instanceof RectangleBig);   // true


let SerializableMixin = {
  serialize() {
      return JSON.stringify(this);
  }
};

let AreaMixin = {
  getArea() {
      return this.length * this.width;
  }
};

function mixin(...mixins) {
  var base = function() {};
  Object.assign(base.prototype, ...mixins);
  return base;
}

class Square extends mixin(AreaMixin, SerializableMixin) {
  constructor(length) {
      super();
      this.length = length;
      this.width = length;
  }
}

var x = new Square(3);
console.log(x.getArea());               // 9
console.log(x.serialize());