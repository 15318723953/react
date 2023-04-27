{
    class Counters {
        constructor(public count: number = 0) { }
        public add(value: number) {
            this.count += value
            return this
        }
        public subtract(value: number) {
            this.count -= value
            return this
        }
    }
    const counter1 = new Counters(10)
    console.log(counter1.add(3).subtract(2))

    class PowCounter extends Counters {
        constructor(public count: number = 0) {
            super(count)
        }
        public pow(value: number) {
            this.count = this.count ** value
            return this
        }
    }
    const PowCoounter = new PowCounter(2)
    console.log(PowCoounter.pow(3))

    // 索引类型
    // keyof
    interface Infos {
        name: string;
        age: number
    }
    let infoProp: keyof Infos
    infoProp = 'age'
    infoProp = 'name'

    function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
        return names.map(n => obj[n])
    }
    const infoObj = {
        name: 'lison',
        age: 18
    }
    const values: (number | string)[] = getValue(infoObj, ['name', 'age'])
    console.log(values)
    // []索引访问操作符
    type NameTypes = Infos['name']
    function getProperty<T, K extends keyof T>(c: T, name: K): T[K] {
        return c[name]
    }
    console.log(getProperty({ name: 'asd', age: 18 }, 'name'))
    interface Objs<T> {
        [key: string]: T
    }
    const objs1: Objs<number> = {
        age: 18
    }
    const keys: Objs<number>['name'] = 1

    interface Type {
        a: never;
        b: never;
        c: string;
        d: number;
        e: undefined;
        f: null;
        g: object
    }
    // keyof 会返回类型不为never undefined null的属性名
    type Test = Type[keyof Type]
    // 映射类型
    interface Info1 {
        age: number;
        name: string;
        sex: string
    }
    // in 在里面的作用为for in循环
    // 增加或移除特定修饰符
    type ReadonlyType<T> = {
        readonly [P in keyof T]?: T[P]  // 加?改为可选属性
    }
    type ReadonlyInfo1 = ReadonlyType<Info1>
    const info1: ReadonlyInfo1 = {
        age: 18,
        name: 'asd',
        sex: 'sss'
    }
    type RemoveReadonlyInfo2<T> = {
        -readonly [P in keyof T]-?: T[P]
    }
    type Info1WithoutReadonly = RemoveReadonlyInfo2<ReadonlyInfo1>
    // info1.age = 20 //只读不可修改
    // 两个默认Readonly只读  Partial可选
    // Pick 获取部分属性 Record
    // type Pick<T,K extends keyof T> = {
    //     [P in K]:T[P]
    // }
    console.log(info1)
    interface Info2 {
        name: string;
        age: number;
        address: string
    }
    const info5: Info2 = {
        name: 'asd',
        age: 18,
        address: 'asd'
    }
    function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
        const res: any = {}
        keys.map(key => {
            res[key] = obj[key]
        })
        return res
    }
    const nameAndAddress = pick(info5, ['name', 'address'])
    type Info3 = Pick<Info2, 'name' | 'address'>
    console.log(nameAndAddress)

    // Record 转化为其他值的类型
    function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U> {
        const res: any = {}
        for (const key in obj) {
            res[key] = f(obj[key])
        }
        return res
    }
    const names = { 0: 'hellos', 1: 'world', 2: 'bye' }
    const lengths = mapObject(names, (s) => s.length)
    // console.log(lengths)

    type Proxy<T> = {
        get(): T;
        set(vaule: T): void;
    }
    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>
    }
    function proxify<T>(obj: T): Proxify<T> {
        const result = {} as Proxify<T>
        for (const key in obj) {
            result[key] = {
                get: () => obj[key],
                set: (value) => obj[key] = value
            }
        }
        return result
    }
    const props = {
        name: 'lison',
        age: 18
    }
    const proxyProps = proxify(props)
    proxyProps.name.set('li')
    // console.log(proxyProps)
    // console.log(proxyProps.name.get())
    // 拆包
    function unproxify<T>(t: Proxify<T>): T {
        const result = {} as T
        for (const K in t) {
            result[K] = t[K].get()
        }
        return result
    }
    // console.log(unproxify(proxyProps))
    // 2.9版本升级
    const stringIndex = 'a'
    const numberIndex = 1
    const symbolIndex = Symbol()
    type Objs2 = {
        [stringIndex]: string,
        [numberIndex]: number,
        [symbolIndex]: symbol,
    }
    type keysType = keyof Objs2
    const obj:keysType = symbolIndex
}