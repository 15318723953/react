{
    // 交叉类型 type1 & type2 & type3

    // const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
    //     let res = <T & U>{}
    //     res = Object.assign(arg1, arg2)
    //     return res
    // }
    // mergeFunc({ a: 'a' }, { b: 'b' })
    // 联合类型 type1 | type2 | type3
    // const getLengthFunc = (content: number | string): number => {
    //     if (typeof content === 'string') {
    //         return content.length
    //     } else {
    //         return content.toString().length
    //     }
    // }
    // console.log(getLengthFunc(1234))
    // 类型保护
    // const valueList = [123, 'asd']
    // const getRandomValue = () => {
    //     const num: number = Math.random() * 10
    //     if (num < 5) {
    //         return valueList[0]
    //     } else {
    //         return valueList[1]
    //     }
    // }
    // const item = getRandomValue()
    // // 类型断言的写法
    // if((<string>item).length){
    //     console.log((<string>item).length)
    // }else{
    //     console.log((<number>item).toFixed())
    // }
    // 类型保护的写法
    // 复杂的类型判断写法
    // const item = getRandomValue()
    // function isString(value: number | string): value is string {
    //     return typeof value === 'string'
    // }
    // if (isString(item)) {
    //     console.log(item.length)
    // } else {
    //     console.log(item.toFixed())
    // }
    // 简单的写法
    // 只能是string/number/booan/symbol中的一种
    // if ( typeof item === 'string') {
    //     console.log(item.length)
    // } else {
    //     console.log(item.toFixed())
    // }

    // instanceof
    // class CreatedByClass1 {
    //     public age = 18
    //     // constructor() {}
    // }
    // class CreatedByClass2 {
    //     public name = 'lison'
    //     // constructor() {}
    // }
    // function getRandomTItem(){
    //     return Math.random()<0.5 ? new CreatedByClass1():new CreatedByClass2()
    // }
    // const item = getRandomTItem()
    // if(item instanceof CreatedByClass1){
    //     console.log(item.age)
    // }else{
    //     console.log(item.name)
    // }

    // null/undefind是任何类型的子类型
    // let values = '123'
    // values = undefined
    // const sunFunc = (x:number,y?:number) =>{
    //     return x + (y || 0)
    // }

    // const getLengthFunction = (value: string | null): number => {
    //     // if(value === null){return 0}
    //     // else{return value.length}
    //     return (value || '').length
    // }

    // function getSpliceStr(num: number | null): string {
    //     function getRes(prefix: string) {
    //         return prefix + num.toFixed().toString()
    //     }
    //     num = num || 0.1
    //     return getRes('lison')
    // }
    // console.log(getSpliceStr(null))


    // 类型别名
    // type TypeString = string;
    // let str: TypeString;
    // type PositionType<T> = { x: T, y: T }
    // const postion1: PositionType<number> = {
    //     x: 1, y: 1
    // }
    // const postion2: PositionType<string> = {
    //     x: '1', y: '1'
    // }
    // type Childs<T> = {
    //     current:T,
    //     child?:Childs<T>
    // }
    // let ccc:Childs<string> = {
    //     current:'asd',
    //     child:{
    //         current:'asd',
    //         child:{
    //             current:'ass'
    //         }
    //     }
    // }
    // type Childs = Childs //不可以循环引用自身  只可以在属性中使用自己

    // extends implements //接口起别名时不可以使用
    // type Alias = {
    //     num:number
    // }
    // interface Interface{
    //     num:number
    // }
    // let _interface :Interface = {
    //     num:123
    // }
    // let _alias :Alias = {
    //     num:123
    // }
    // _alias = _interface  // 接口和类型别名实现的作用是一样的
    // 当你要定义的类型要用于拓展要使用implements和extends的时候要使用接口  用接口命名时 interface命名可以重复
    // 当无法使用接口并且需要使用联合类型或者元祖类型使用类型别名  type命名为唯一不可重复

    // 字符串字面量
    type Name = 'Lison' // Lison作为类型使用
    // const name1:Name = 'asd'; //不允许非Lison的字符串
    type Direction = 'north' | 'east' | 'south' | 'west'
    function getDirectionFirstLetter(directing: Direction) {
        return directing.substr(0, 1)
    }
    console.log(getDirectionFirstLetter('south'))
    // 数字字面量
    type Age = 18;
    interface InfoInterface {
        name: string,
        age: Age
    }
    const _info: InfoInterface = {
        name: 'asd',
        age: 18
    }
    // 枚举成员类型

    // 可辨识联合两要素
    // 1.要具有普通的单例类型属性
    // 2.一个类型别名包含了那些类型的联合
    interface Square {
        kind: 'square',
        size: number
    }
    interface Rectangle {
        kind: 'rectangle',
        height: number,
        width: number
    }
    interface Circle {
        kind: 'circle',
        radius: number
    }
    type Shape = Square | Rectangle | Circle
    function assertNever(value: never):never {
        throw new Error(value)
    }
    // 两种提示缺少类型
    // 打开ts strictNullChecks选项
    // 定义一个函数
    function getArea(s: Shape): number {
        switch (s.kind) {
            case 'square': return s.size * s.size; break
            case 'rectangle': return s.height * s.width; break
            case 'circle': return Math.PI * s.radius ** 2; break
            default: return assertNever(s)
        }
    }
}
