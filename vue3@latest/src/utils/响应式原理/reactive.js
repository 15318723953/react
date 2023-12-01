import { track, trigger } from './effect.js';
const isObject = (target) => {
    return target != null && typeof target == 'object';
};
export const reactive = (target) => {
    // Proxy 构造函数
    // 创建一个对象的代理 实现自定义的添加获取删除等一系列操作
    return new Proxy(target, {
        get(target, key, receiver) {
            // Reflect 反射
            // 是一个内置函数 可以操作对象的一系列属性,成功或失败返回true或false
            let res = Reflect.get(target, key, receiver);
            track(target, key);
            if (isObject(res)) {
                return reactive(res);
            }
            return res;
        },
        set(target, key, value, receiver) {
            let res = Reflect.set(target, key, value, receiver);
            trigger(target, key);
            return res;
        },
    });
};
reactive({});
