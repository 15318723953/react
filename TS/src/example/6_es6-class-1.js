// es5 构造函数

// function Point(x,y){
//     this.x = x;
//     this.y = y
// }
// Point.prototype.getPostione = function(){
//     return this.x +','+this.y
// }
// var p1 = new Point(2,3)
// console.log(p1)
// console.log(p1.getPostione())
// var p2 = new Point(4,5)

// class类

// class Point {
//     constructor(x, y) {
//         this.x = x,
//             this.y = y
//     }
//     getPostione() {
//         return `('${this.x},${this.y})`
//     }
// }

// const p1 = new Point(1, 2)
// console.log(p1)

// var info = {
//     _age: 18,
//     set age(newValue) {
//         if (newValue > 18) {
//             console.log('怎么变老了')
//         } else {
//             console.log('我还年轻')
//         }
//     },
//     get age() {
//         console.log('你问我年龄干嘛')
//         return this._age
//     }
// }
// console.log(info.age)
// info.age = 17
// info.age = 19

// class Info {
//     constructor(age) {
//         this._age = age
//     }
//     set age(newVlaue) {
//         this._age = newVlaue
//         if (newVlaue > 18) {
//             console.log('怎么变老了')
//         } else {
//             console.log('我还年轻')
//         }
//     }
//     get age() {
//         console.log('你问我年龄干嘛')
//         return this._age
//     }
// }

// let info = new Info(12)
// console.log(info.age)
// info.age = 19
// 函数两种定义方式
// const func = function(){

// }
// function func(){

// }
// class的两种定义方式
// class Infos{
//     constructor(){

//     }
// }
// const Infos = class {
//     constructor(){

//     }
// }

// 静态方法
// class Point {
//     z = 0
//     constructor(x,y){
//         this.x = x
//         this.y = y
//     }
//     getPoint(){
//         return `(${this.x},${this.y})`
//     }
//     static getClassName(){  // 只能类自身使用的方法
//         return Point.name
//     }
// }
// const p = new Point(1,2)
// console.log(p)
// console.log(p.getClassName())
// console.log(Point.getClassName())

// class Point {
//     constructor(){
//         this.x = 0
//     }
//     static y = 2  // 静态属性
// }
// // Point.y = 2  // 实现类的静态属性 
// const p = new Point()
// console.log(p)

// 私有方法  es6暂不提供私有属性和私有方法需要使用一些技巧
// const _func2 = ()=>{}
// const func3 = Symbol('func3')
// class Point {
//     func1(){
//         _func2.call(this) // 第二种 私有调用
//     }
//     // _func2(){ // 第一种 一般带_就是私有方法

//     // }
//     static [func3] (){  // 第三种方法 利用Symbol
        
//     }
// }
// const p = new Point()
// console.log(p)

// 私有属性 
// class Point {
//     #ownPros = 12 // 尚未发布
// }
// const p = new Point()
// console.log(p)

// function Point(){
//     console.log(new.target)  // 使用new调用时有值
// }
// const p = new Point()
// const p2 = Point()

// class Point{
//     constructor(){
//         console.log(new.target) // 使用new调用时有值 返回值为class或者构造函数
//     }
// }
// const p3 = new Point()

class Parent{
    constructor(){
        console.log(new.target)  // 返回为子类而不是父类
    }
}
class Child extends Parent {
    constructor(){
        super()
    }
}
const c = new Child() // 返回为子类





