{
    // const getFullName = ({ firstName, lastName }) => {
    //     return `${firstName} ${lastName}`
    // }


    // console.log(getFullName({
    //     firstName: 'asd',
    //     lastName: 'zzx'
    // }))

    interface NameInfo {
        firstName: string,
        lastName: string
    }
    const getFullName = ({ firstName, lastName }: NameInfo): string => {
        return `${firstName} ${lastName}`
    }

    getFullName({
        firstName: 'hshs',
        lastName: 'zzs'
    })


    interface Vegetable {
        color?: string,
        readonly type: string,  // 设置为只读
        // [prop:string]:any   // 可以指定属性名为字符串类型,属性值为任意类型
    }
    const getVegetables = ({ color, type }: Vegetable) => {
        return `a ${color ? (color + '') : ''} ${type}`
    }

    // console.log(getVegetables({
    //     type: 'tpmato',
    //     color: 'red',
    //     size:2
    // } as Vegetable)) // 可以使用类型断言强制将参数转变为Vegetable类型
    const vegetables = {
        type: 'tpmato',
        color: 'red',
        size: 2
    } // 可以利用类型兼容性,多了无所谓少了不行
    console.log(getVegetables(vegetables))

    const vegetableObj: Vegetable = {
        type: 'tomato'
    }
    // vegetableObj.type = 'carrot'  // 无法修改
    // 定义数组类型
    interface ArrInter {
        0: number,
        1: string
    }
    const arr: ArrInter = [1, 'a']
    // arr[1] = 'b'
    // console.log(arr)
    // 定义函数类型
    type AddFunc = (num1: number, num2: number) => number

    const add: AddFunc = (n1, n2) => n1 + n2

    // 定义索引类型
    // interface RoleDic {
    //     [id: number]: string
    // }
    // const role: RoleDic = {
    //     1: 'aa'
    // }
    interface RoleDic {
        [id: string]: string
    }
    const role2: RoleDic = {
        a: 'asd',
        1: 'asd'   // 当你给对象定义一个属性名为数值类型时,他会先把属性名转化为字符串再进行定义
    }

    // 接口的继承
    interface Vagetables {
        color: string
    }
    interface Tomato extends Vagetables {
        radius: number
    }
    interface Carrot extends Vagetables {
        length: number,
    }

    const tamato: Tomato = {
        radius: 1,
        color: 'red'
    }
    const carrot: Carrot = {
        length: 2,
        color: 'orange'
    }


    interface Counter {
        ():void,
        count:number
    }

    const getCounter = ():Counter =>{
        const c = () =>{c.count++}
        c.count = 0
        return c
    }
    const counter:Counter = getCounter()
    counter()
    console.log(counter.count)
    counter()
    console.log(counter.count)

}