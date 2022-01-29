{
    // 泛型的使用  泛型变量的值可以随意使用 可以为T也可以为其他
    // const getArray = <T>(value:T,times=5):T[] =>{
    //     return new Array(times).fill(value)
    // }
    // console.log(getArray<number>(123,4).map(item => item.toFixed()))

    // const getArray = <T, U>(param1: T, param2: U, times: number): ([T, U])[] => {
    //     return new Array(times).fill([param1, param2])
    // }
    // getArray(1, 'asd', 3).forEach(item => {
    //     console.log(item[0])
    //     console.log(item[1])
    // })
    // 普通形式
    // let getArray:<T>(arg:T,times:number) => T[]
    // getArray = (arg:any,times:number) =>{
    //     return new Array(times).fill(arg)
    // }
    // getArray(123,5).map(item => item.length) // 报错因为类型为number
    // 类型别名的形式
    // type GetArray  = <T>(arg:T,times:number) => T[]
    // let getArray:GetArray = (arg:any,times:number) => {
    //     return new Array(times).fill(arg)
    // }
    // 接口的形式
    // interface GetArray{
    //     <T>(arg:T,times:number) : T[]
    // }
    // interface GetArray<T>{
    //     (arg:T,times:number) : T[],
    //     array:T[]
    // }

    // 泛型约束
    interface ValueWithLength {
        length:number
    }

    const getArray = <T extends ValueWithLength>(arg:T,times):T[] => {
        return new Array(times).fill(arg)
    }
    getArray([1,2,3],4)
    // getArray(123,4)

    // 在泛型约束中使用类型变量
    // K extends keyof T  意义是T必须是k类型中的一员
    const getProps = <T,K extends keyof T>(object:T,prpsName:K) =>{
        return object[prpsName]
    }
    const obj={
        a:'a',
        b:'b'
    }
    getProps(obj,'a')
    getProps(obj,'b')
    // getProps(obj,'c')



}