// class Point {
//     x: number
//     y: number
//     constructor(x: number, y: number) {
//         this.x = x
//         this.y = y
//     }
//     getPosition() {
//         return `${this.x},${this.y}`
//     }
// }
// const point = new Point(1, 2)
// console.log(point)
// class Parent {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// class Child extends Parent {
//     constructor(name: string) {
//         super(name)
//     }
// }

// 修饰符
// public 公共 可以在实例外部外使用这个方法和属性
// private 私有的  只能在类的定义中使用

// class Parent{
//     private age:number
//     constructor(age:number){
//         this.age = age
//     }
// }
// const p = new Parent(18)
// console.log(p.age)
// console.log(Parent.age)  无法访问
// class Child extends Parent {
//     constructor(age){
//         super(age)
//     }
// }
// const c = new Child(18)
// console.log(Child.age) // 子类无法访问
// console.log(c.age) // 子类继承的实例也无法访问

// protected 受保护 在继承该类的子类中可以访问

// class Parent{
//     protected age:number
//     protected constructor(age:number){
//         this.age = age
//     }
// }
// const p = new Parent(18) // 加入protected后无法再创建实例只能继承
// class Child extends Parent {
//     constructor(age){
//         super(age)
//         console.log(super.age) // 可以获取打公共的和受保护的方法
//     }
// }
// const c = new Child(18)
// console.log(c.age) // 无法在实例外部访问受保护的属性


// readonly 只读修饰符
// class UserInfo {
//     readonly name:string
//     constructor(name){
//         this.name = name
//     }
// }

// const userInfo = new UserInfo('zzx')
// console.log(userInfo)
// userInfo.name = '123' // 无法修改


// 参数属性
// class A {
//     constructor(public name:string){
//         //
//     }
// }
// const a = new A('zzx')
// console.log(a.name)

// 静态属性

class Parent {
    static age:number=18
    static getAge(){
        return Parent.age
    }
    constructor(){
        //
    }
}
const p = new Parent()
// console.log(p.age) // 无法访问
// console.log(Parent.age)

// 可选类属性和存储器
// class Info{
//     name:string
//     age?:number
//     _infoStr:string
//     constructor(name:string,age?:number,public sex?:string){
//         this.name = name
//         this.age = age
//     }
//     get infoStr(){
//         return this._infoStr
//     }
//     set infoStr(value){
//         console.log(`setter:${value}`)
//         this._infoStr = value
//     }
// }
// const info = new Info('zzx')
// console.log(info)
// const info2 = new Info('zzx',18)
// console.log(info2)
// const info3 = new Info('zzx',18,'asd')
// console.log(info3)
// const info4 = new Info('lison',19)
// info4.infoStr = '123321'
// console.log(info4.infoStr)


// 抽象类
// abstract class People{
//     constructor(public name:string){
//         //
//     }
//     abstract printName():void
// }
// // const p = new People('asd') // 无法创建抽象类的实例
// class Man extends People {
//     constructor(name){
//         super(name)
//         this.name = name
//     }
//     printName(){  // 无法主动继承抽象方法 需要自己创建
//         console.log(this.name)
//     }
// }
// const m = new Man('zxx')
// m.printName()


// abstract class People {
//     abstract _name:string
//     abstract set insideName(value:string)  // 存值器函数式不能标记返回值类型
//     abstract get insideName():string
// }
//  class  P extends People{
//      _name:string
//      insideName:string
//  }

//  class People {
//      constructor(name:string) {
//          //
//      }

//  }
//  let p2 = new People('zzx')
//  class Animal {
//      constructor(name:string) {
//          //
//      }
//  }
//  p2 = new Animal('zasd')
//  console.log(p2 instanceof People)

// 类的类型接口
// interface FoodInterface {
//     type :string
//     name:string
// }
// class FoodClass implements FoodInterface {  // 判断的是类创建的实例是否符合接口
//     type:string
//     name:string
// }

// class A {
//     protected name:string
// }
// // tslint:disable-next-line:no-empty-interface
// interface I extends A {

// }
// class B extends A implements I {
//     protected name:string
// }

// 在泛型中使用类
// 创建了一个函数 传入的参数是一个类,返回的参数是一个创建的实例
// new() 代表调用类的构造函数
const create = <T>(c:new() => T):T =>{
    return new c()
}
class Info {
    age : number
    constructor(){
        this.age = 18
    }
}
console.log(create(Info))

