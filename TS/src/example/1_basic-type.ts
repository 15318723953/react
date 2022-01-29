{// 布尔类型
// let bool: boolean = true;
let bool: boolean
bool = false
// bool = 123 不可以赋值其他类型

// 数值类型
let num: number = 123;

num = 0b11111011; // 二进制

num = 0o173; // 八进制

num = 0x7b; // 16进制

// 字符串类型
let str: string;
str = 'asd'
str = `数值是${num}`
// console.log(str)

// 数组类型
// [1,2,3]
// 写法1
let arr: number[]  // 内部只能是数字类型

arr = [1, 4, 12]
// 写法2
let arr2: Array<number>    // 内部只能是数字类型
arr2 = [2]
let arr3: (string | number)[]  // 联合类型  没有括号会认为要么是数字要么是字符串
arr3 = [1, '123']
let arr4: Array<number | string>
arr4 = [1, '123', '22']
// console.log(arr4)

// 元组类型
let tuple: [string, number, boolean]  // 指定数组的固定长度固定位置为什么值
tuple = ['12', 1, false]  // 在2.6之前越界元素只要是数组类型中的都可以被允许,在2.6之后只要是越界就不被允许

// 枚举类型
enum Roles {
    SUPER_ADMIN = 1,
    ADMIN,
    USER
}
// console.log(Roles)
// if(roles === Roles.SUPER_ADMIN){  //当roles是SUPER_ADMIN 则执行

// }

// any类型  任何类型
let valeu: any;
valeu = '123';
valeu = 123;
const arr5: any[] = [1, 2]

// void类型  没有任何类型
const consoleText = (text: string): void => {
    console.log(text)

}
let v: void;
v = undefined;
v = null;
// consoleText('123')

// null 和 undefind
let u: undefined
u = undefined
// u = 23 //报错
let n: null
n = null

num = undefined
num = null

// never类型  永远都不会存在的类型  无线循环和抛错使用的是never类型
const errorFunc = (message: string): never => {
    throw new Error(message)
}
// errorFunc('abv')
const inifniteFunc = (): never => {
    while (true) {
        console.log()
    }
}
// let neverVariable = (()=>{
//     while (true) { }
// })()
// neverVariable = 123 // 不可以将never类型赋给其他类型
// num = neverVariable  // never类型可以赋给其他类型  never是任意类型的子类型

// Object类型
const obj = {
    name:'zzx'
}
const obj2 = obj
obj2.name = 'Z'
function getObject(item:object):void{
    // console.log(item)
}
getObject(obj)

// 类型断言
const getLength = (target:string|number) : number =>{
    if((target as string).length || (target as string).length === 0){
        return (<string>target).length
    }else{
        return target.toString().length
    }
}

// getLength(123)
}
