// string, boolean, number, ...
let x: number = 10;

x = 20;

console.log(x);

// inferencia x annotation
let y = 12;
// y = "teste"

let z:number = 12;

// tipos básicos
let firstname: string = "matheus";
let age: number = 27;
const isAdmin: boolean = true;

// string != String

console.log(typeof firstname);

firstname = "João";

console.log(firstname);

// object
const myNumbers: Number[] = [1, 2, 3]

console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase());
console.log(firstname.toUpperCase());
myNumbers.push(5);

console.log(myNumbers);

// tuplas
let myTuple: [number, string, string[]]

myTuple = [45, "gabriel", ["azul","roxo"]]

// myTuple = [true, false, false]

// object literals -> {prop: value}
const user: { name:string, age:number} = {
    name: "Pedro",
    age: 23
}

console.log(user);

let a:any = 13;
a='teste';
a=true;
a=[];

// union type
let id: string | number = "10";
id=200;

// id = true
// id = []

// type alias
type myIdType = number | string

const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

// enum
// Tamanho de Roupas (size: Médio, size: Grande)
enum size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: size.G,
}

console.log(camisa)

// literal types

let teste: "autenticado" | null

teste = "autenticado";
teste = null

// funcoes 
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(12, 12));

function sayHelloTo(name: string):string {
    return `Hello ${name}`
}

console.log(sayHelloTo("Matheus"))

function logger(msg:string): void {
    console.log(msg);
}

logger("Teste!")

function greeting(name:string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}

greeting("José");
greeting("Pedro", "Sir");

// interfaces
interface MathFunctionParams {
    n1:number;
    n2:number;
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10,
};

console.log(multiplyNumbers(someNumbers))

// narrowing 
// checagem tipos
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`)
        return;
    }
    console.log("não foi passado um número");
}

doSomething(5);
doSomething(true);

// generics
function showArrayItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArrayItems(a1);
showArrayItems(a2);

// Classes
class User {
    name 
    role 
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canshow: boolean) {
        if (canshow) {
            console.log(`Idade do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita!")
    }
}

const zeca = new User("Zéca", "Admin", true);

console.log(zeca);

zeca.showUserName();

zeca.showUserRole(false);

// interfaces em classes 
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {

    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VW", 4)

fusca.showBrand()

// herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4);

a4.showBrand();
// constructor decorator
// decorators
function BaseParamters() {
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}
@BaseParamters()

class person {
    name 

    constructor(name: string) {
        this.name = name
    }
}

const sam = new person("Sam");

console.log(sam)