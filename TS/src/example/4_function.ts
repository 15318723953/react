{
    // es5
    // function add(agr1: number, arg2: number) {
    //     return agr1 + arg2
    // }
    // es6
    // const add = (agr1: number, arg2: number)=> agr1 + arg2
    // 定义函数
    let add: (x: number, y: number) => number
    add = (arg1: number, arg2: number): number => arg1 + arg2
    const arg3 = 3
    add = (arg1: number, arg2: number) => arg1 + arg2 + arg3
    // 使用类型别名定义函数
    type Add = (x: number, y: number) => number
    let addFunc: Add
    addFunc = (arg1: number, arg2: number) => arg1 + arg2

    // addFunc = (arg1, arg2, arg3) => arg1 + arg2 + (arg3 ? arg3 : 0)
    // 可选参数
    type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
    // let addFunction: AddFunction
    // addFunction = (x: number, y: number) => x + y
    // addFunction = (x: number, y: number,z:number) => x + y + z
    // 默认值
    const addFunction = (x: number, y = 4) => x + y
    console.log( addFunction(1,2))

    // const handleDate = (arg1:number,...args:number[]) =>{
    //     // ...
    // }
    // 函数重载
    function handleDate(x:string):string[]
    function handleDate(x:number):number[]
    function handleDate(x:any):any{
        if(typeof x === 'string'){
            return x.split('')
        }else{
            return x.toString().split('').map(item => Number(item))
        }
    }
    console.log(handleDate('abc'))
    console.log(handleDate(123))



}