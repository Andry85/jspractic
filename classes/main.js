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

