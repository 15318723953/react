import { effect } from "./effect"
// computed实现本质上就是调用了一下effect函数
export const computed = (getters: Function) => {
    // _value为已经计算出的值,{}对象为脏值处理已经储存的值不会再调用
    let _value = effect(getters, {
        scheduler: () => {
            // 脏值
            _dirty = true
        }
    })
    let _dirty = true
    let catchValue:any
    class ComputedRefImpl {
        get value() {
                 // 脏值处理
            if (_dirty) {
                catchValue = _value()
                _dirty = false 
            }
            return catchValue
        }
    }
    return new ComputedRefImpl()
}