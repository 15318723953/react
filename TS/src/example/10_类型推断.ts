{
    // 简单的类型推论
    // let name = 'lison'
    // name = 123
    // 多类型联合
    // let arr = [1,'a']
    // arr = [2,'a',false]
    // 上下文类型
    // @param
    // window.onmousedown = (event) => {
    //     console.log(event)
    // }

    interface Info {
        name: string,
        info?: {
            age: number
        }
    }
    let infos: Info
    const infos1 = {
        name: 'lison', info: {
            age: 18
        }
    }
    const infos2 = { age: 18 }
    const infos3 = { name: 'lison', age: 18 }
    infos = infos1
    // infos = infos2
    infos = infos3

    // 函数的兼容性
    // let x = (a:number) => 0
    // let y = (b:number,c:string) => 0
    // y = x
    // x = y  // 参数个数必须小于等于赋值的参数个数
    const arrs = [1, 2, 3]
    arrs.forEach((item, index, array) => {
        console.log(item)
    })
    // 参数类型
    // let x = (a:number)=>0;
    // let y = (b:string)=>0
    // x=y

    // 可选参数和剩余参数
    const getSum = (arr: number[], callback: (...args: number[]) => number): number => {
        return callback(...arr)
    }
    const res = getSum([1, 2, 3], (...args: number[]): number => args.reduce((a, b) => a + b, 0))
    const res1 = getSum([1, 2, 3], (args1, args2, args3): number => args1 + args2 + args3)

    // 函数参数双向协变
    let funA = (args: number | string): void => {}
    let funB = (args: number): void => {}
    funA = funB
    funB = funA

    // 返回值类型
    // let x = ():string | number => 0
    // let y = ():string => 'a'
    // let z = ():boolean => false
    // x = y
    // y = x  //报错
    // x = z //报错

    // 函数重载
    function merge(arg1:number,agr2:number):number
    function merge(arg1:string,agr2:string):string
    function merge(arg1:any,arg2:any):any{
        return arg1 + arg2
    }
    // let a = merge(1,2).length  // 报错
    let a =   merge('1','2').length

    function sum(arg1:number,arg2:number,):number
    function sum(arg1:any,arg2:any,):any{
        return arg1 + arg2
    }
    let func  = sum
    func = merge

    // 枚举
    enum StatusEnum{
        On,
        Off
    }
    enum AnimalEnum {
        Dog,
        Cat
    }
    let s = StatusEnum.On
    s = 2
    // s = AnimalEnum.Dog // 是不兼容的 枚举类型只和数字类型兼容 和不同枚举类型是不兼容的

    // 类的兼容性
    class  AnimalClass {
        public static age:number
        constructor(public name:string) {}
    }
    class FoodClass {
        constructor(public name:string) {}
    }
    class PeopleClass {
        constructor(public name:number) {}
    }

    let animal:AnimalClass
    let food:FoodClass
    let people:PeopleClass

    animal = food
    // animal - people // 报错  类型是不兼容的
    // private
    // protected
    class ParentClass {
        private age:number
        constructor() {}
    }
    class  ChildrenClss extends ParentClass {
        constructor() {
            super()
        }
    }
    class OtherClass {
        private age:number
        constructor(parameters) {}
    }
    const children:ParentClass = new ChildrenClss() // 子类可以赋值给父类类型的值的
    // const other:ParentClass = new OtherClass() // 报错

    // 泛型
    interface Data<T>{
        data:T
    }
    let data1:Data<number>
    let data2:Data<string>
    // data1 = data2 // 不兼容

}