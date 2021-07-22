export default class User { // просто добавьте "default"
    constructor(name) {
      this.name = name;
    }
  }

  export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }


  export function GoHome() {
    console.log('GoHome');
  }


