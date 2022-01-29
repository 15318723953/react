{// const s1 = Symbol()
    // console.log(s1)
    // const s2 = Symbol()  // symbol是独一无二的

    // console.log(s1 == s2)

    const s3 = Symbol('zzx')  // 在ts中只能接收string和number类型
    // console.log(s3)
    const s4 = Symbol('zzx')

    // s4+2  // 会报错 symbol值不可以参加运算
    // console.log(s4.toString()) //可以转化为字符串
    // console.log(Boolean(s4))  // 可以转化为bool

    const prop = 'name'
    const info: object = {
        // name:'zzx'
        [prop]: 'zzx',
        [`my${prop}`]: 'asd'
    }
    // console.log(info)

    const s5 = Symbol('name')
    const info2: object = {
        [s5]: 'zzx',
        age: 213,
        asd: '123'
    }
    // console.log(info2)
    info2[s5] = 'haha'
    // console.log(info2)
    // info2.s5  //会报错

    for (const key in info2) {
        // console.log(key) // 查找不到symbol值
    }
    // console.log(Object.keys(info2)) // 查找不到symbol值

    // console.log(Object.getOwnPropertyNames(info2)) // 查找不到symbol值

    // console.log(JSON.stringify(info2)) // 查找不到symbol值

    // console.log(Object.getOwnPropertySymbols(info2))  // 只能查找到symbol为属性的属性名

    // console.log(Reflect.ownKeys(info2))  // 可以查找到所有的属性名

    // Symbol.for()  Symbol.keyFor

    const s6 = Symbol('zzx') // 两者不相同
    const s7 = Symbol('zzx')

    const s8 = Symbol.for('zzx') // 后者会先去全局里查找是否有相同字符串的值,有的话直接返回创建完的值,没有的话穿件一个新的值
    const s9 = Symbol.for('zzx')  // 两者是相同的
    const s10 = Symbol.for('asd') // 不相同

    // console.log(Symbol.keyFor(s8)) // 查找的是使用Symbol.for()创建值的字符串标识

    // 11个内置的Symbol值
    // Symbol.hasInstance // 指向了一个name方法  当你给一个对象设置Symbol.hasInstance为属性名的方法后 当其他对象使用instanceof就会调用这个方法,方法里参数为调用对象

    const obj1 = {
        [Symbol.hasInstance](otherObj) {
            // otherObj为调用的对象
            console.log(otherObj)
        }
    }
    console.log({ a: 'a' } instanceof <any>obj1)

    // Symbol.isConcatSpreadable

    const arr = [1, 2]
    console.log([].concat(arr, [3, 4]))  // 数组将会被扁平化,被查开合为一个数组
    arr[Symbol.isConcatSpreadable] = false
    console.log([].concat(arr, [3, 4]))  // 设置false后将不会扁平化格式为[[1,2],3,4]

    class C extends Array {
        constructor(...args) {
            super(...args)
        }
        static get [Symbol.species]() { // 可以指定一个创造衍生对象的构造函数
            return Array
        }
        getName() {
            return 'zzx'
        }
    }
    const c = new C(1, 2, 3)
    const a = c.map(item => item + 1)
    // console.log(a)
    // console.log(a instanceof C)
    // console.log(a instanceof Array)

    const obj3 = {
        [Symbol.match](str) {
            console.log(str)
            console.log(str.length) // 用于比较字符串
        },
        [Symbol.split](str) {
            console.log('split' + str.length)
        }
    }
    'asdas'.match(<RegExp>obj3)

    // Symbol.replace
    // Symbol.search
    // Symbol.split
    'asdas'.split(<any>obj3)

    // Symbol.iterator
    const arr4: number[] = [1, 6, 3]
    const iterator = arr4[Symbol.iterator]()  // 返回了一个遍历器对象
    // console.log(iterator)
    // console.log(iterator.next())
    // console.log(iterator.next())
    // console.log(iterator.next())
    // console.log(iterator.next())

    const obj4: unknown = {
        [Symbol.toPrimitive](type) {
            console.log(type)  // type值这个对象被转化成了什么样的对象
        }
    }
    // const res = (obj4 as number)++
    // const res = `asd${obj4}`

    const obj5 = {
        // [Symbol.toStringTag]: 'zzx'  // 当使用toString()方法时调用
        get [Symbol.toStringTag]() {
            return 'zzx'
        }
    }

    // console.log(obj5.toString())  // 返回值 [object zzx]
    // Symbol.unscopables
    const obj6 = {
        a: 'a',
        b: 'b'
    }

    console.log(Array.prototype[Symbol.unscopables]) // 可以看到在with环境里被过滤掉的属性

    Array.prototype.map(item => {
        console.log(item)
    })
    console.log(Array.prototype)
}