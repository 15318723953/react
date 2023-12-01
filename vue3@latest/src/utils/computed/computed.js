import { effect } from "./effect.js";
export const computed = (getters) => {
    // _value为已经计算出的值,{}对象为脏值处理已经储存的值不会再调用
    let _value = effect(getters, {
        scheduler: () => {
            //脏值
            debugger
            _dirty = true;
        }
    });
    
    let _dirty = true;
    let catcnValue;
    class ComputedRefImpl {
        get value() {
            // 脏值处理
            if (_dirty) {
                catcnValue = _value();
                _dirty = false;
            }
            return catcnValue;
        }
    }
    return new ComputedRefImpl();
};
