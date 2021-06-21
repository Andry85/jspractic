let magazin = {
    pages: 300,
    "owner of": "Larry king",
    yaer: 1922,
    informPages: function () {
        console.log(this.pages)
    }
}

console.log(magazin.hasOwnProperty("toString"));

console.log(magazin.propertyIsEnumerable("toString"));

console.log(Object);

console.log(Object.prototype);

console.log(Object.values(magazin));

for (let key in magazin) {
    if (typeof magazin[key] === "function") continue;
    console.log(key);
}

console.log(Object.keys(magazin));

console.log(Object.getOwnPropertyNames(magazin));

console.log(Reflect.ownKeys(magazin));


let target = {x: 1}, source = {y: 2, z: 3};

for (let key of Object.keys(source)) {
    target[key] = source[key];
}
console.log(target);

console.log('------------ Object assign ----------------------');

let copy = Object.assign({}, target, source);

console.log(copy);

console.log('------------ Json ----------------------');

let myJson = JSON.stringify(copy);

console.log(myJson);

let parseJson = JSON.parse(myJson);

console.log(parseJson);

console.log('------------ Objrcy methods ----------------------');

let str = String({y: 2, z: 3});

console.log(str);


const hands = 4, eyes = 2;

let animal = {
    hands,
    eyes
}

console.log(animal);


const MODEL = "my";
function sleed(val) {
    return 'my' + 2;
}

let car = {
    [MODEL]: "BMW",
    [sleed()]: 100
}
console.log(car);


console.log('------------ Symbol ----------------------');

const mysymbol = Symbol("it is my symbol");

let room = {
    [mysymbol]: {
        x: 10,
        y: 20
    }
}

room[mysymbol].x = 26;

console.log(room);

console.log('------------ Spread ----------------------');

let mainpanel = {
    width: '50px',
    height: '100px'
}

let sidebarPanel = {
    ...mainpanel,
    height: '300px'
};

console.log(sidebarPanel);


const bike = {
    name: "Viktor",
    showName: function() {
        return this.name;
    }
}

console.log(bike.name);

const bisicle = {
    name: "Oleg",
    showName() {
        return this.name;
    }
}

console.log(bisicle.name);


const myPC = {
    frequency: 1000,

    get frequencyVal() {
        return this.frequency;
    },
    set frequencyVal(val) {
        this.frequency = val;
    }

}

console.log(myPC.frequencyVal);
console.log(myPC.frequencyVal = 3000);

console.log(myPC.frequencyVal);


const worker = {
    get salary() {
        return this._salary
    },
    set salary(val) {
        if (val > 4000) {
            alert('We can not pay you so much');
            return;
        } else {
            this._salary = val;
        }
        
    }
}

worker.salary = 10000;
console.log('worker.salary: ', worker.salary);
