
// es5 函数的继承
function Food() {
    this.type = 'food'
}
Food.prototype.getType = function () {
    return this.type
}
function Vegetables(name) {
    this.name = name
}
console.log(new Food())
Vegetables.prototype = new Food()
const tomato = new Vegetables('tomato')
console.log(tomato)

// es6 类的继承
// class Parent {
//     constructor(name) {
//         this.name = name
//     }
//     getName() {
//         return this.name
//     }
//     static getNames(){
//         return this.name
//     }
// }
// class Child extends Parent {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//     }
// }
// const c = new Child('zzx', 18)
// console.log(c)
// console.log(c.getName())
// console.log(c instanceof Child)
// console.log(c instanceof Parent)
// console.log(Child.getNames())
// console.log(Object.getPrototypeOf(Child) === Parent)  // 返回一个对象的原型对象或者一个类的父类

// super作为函数
// 子类的constructor中必须调用一次super,只能在constructor使用
// super作为对象
// 在普通方法中 指向 父类的原型对象
// 在静态方法中 指向 父类
// class Parent {
//     constructor() {
//         this.type = 'parent'
//     }
//     getName() {
//         return this.type
//     }
// }
// Parent.getType = () => {
//     return 'is Parent'
// }
// class Child extends Parent {
//     constructor(){
//         super()  
//         console.log('constructor' + super.getName())
//     }
//     getParentName(){
//         console.log('constructor' + super.getName())
//     }
//     static getParentType(){
//         console.log('constructor' + super.getType()) 
//     }
// }
// const c = new Child()
// c.getParentName()
// // c.getParentType() //  在普通方法中代表的是父类的原型对象所以找不到父类本身的方法
// Child.getParentType()  //在静态方法中指向的是父类

// class Parent{
//     constructor(){
//         this.name = 'parent'
//     }
//     print(){
//         console.log(this.name)  // 父类的this指向的是子类的实例
//     }
// }

// class Child extends Parent{
//     constructor(){
//         // console.log(super) // 不允许直接拿取
//         super()
//         this.name = 'child'
//     }
//     childPrint(){
//         super.print()
        
//     }
// }

// const c = new Child()
// c.childPrint()

// prototype
// __proto__
 function Asd(params) {
    
}
Asd.prototype = new Object()
var obj = new Asd()
console.log(obj)
console.log(obj.__proto__ == Asd.prototype)
console.log(Asd.__proto__ == Object)
console.log(Asd)
// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向的父类的prototype属性
// 实例的__proto__属性__protp__指向父类实行的__peoto__

// es5原生的构造函数
// Boolean
// Number
// String
// Array
// Date
// Function
// RegExp
// Error
// Object

class CustomArray extends Array {
    constructor(...args){
        super(...args)
    }
}
const b = new Array(2)
const arr = new CustomArray(3)
console.log(arr.fill('+'))
console.log(arr.join('_'))
console.log(CustomArray.prototype.prototype)
console.log(CustomArray.prototype.__proto__ == Array.prototype)
console.log(CustomArray.__proto__ == Array)  // true
console.log(arr.__proto__ == CustomArray.prototype)
console.log(arr.__proto__ == CustomArray.prototype)
