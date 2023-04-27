{
    // enum Status {
    //     Uploading,
    //     Susccess = 1,
    //     Failed
    // }
    // console.log(Status[0])
    // console.log(Status.Susccess)

    enum Message {
        Error = 'sorry error',
        Success = 'hoho',
        Failed = Error,
    }
    // console.log(Message.Failed)
    // 异构枚举 及包含数字枚举又包含字符串枚举 尽可能少用
    enum Resuil {
        Faild = 0,
        Success = 'success'
    }
    // 枚举成员类型 和 联合枚举成员类型
    // 当一个枚举值满足一定的条件时 这个枚举的每个成员和枚举值本身都可以作为类型来使用
    // 1. enum E{A}
    // 2. enum E{A = 'a'}
    // 3/ enum E{A = 1}
    // 枚举成员类型
    enum Animals {
        Dog = 1,
        Cat = 2
    }
    interface Dog {
        type: Animals.Dog
    }

    // const dog:Dog = {
    //     type:Animals.Dog
    // }
    // 联合枚举类型
    enum Status {
        Off,
        On
    }
    interface Light {
        status: Status
    }
    const leght: Light = {
        status: Status.Off
    }
    // 一般定义一个枚举值后,都会将其编译成js真实存在的对象
    // 加const后最后编译完之后不会有编译后的对象,而是直接将值替换掉
    const enum Animals1 {
        Dog = 1
    }
    console.log(Animals1.Dog)
}