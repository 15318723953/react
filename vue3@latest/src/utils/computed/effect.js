// 副作用函数
let activeEffect;
export const effect = (fu, options) => {
    const _effect = function () {
        activeEffect = _effect;
        let res = fu();
        return res;
    };
    _effect.options = options;
    _effect();
    return _effect;
};
// 依赖收集
// WeekMap 构造函数 是键值对组合并且键必须是对象,值可以是任意的
// WeekMap的key是不可枚举的,如果需要可枚举的key请使用Map()
// track目的先构造出一个targetMap对象
const targetMap = new WeakMap();
// target是WeakMap的key
// key是target的key
export const track = (target, key) => {
    // 获取当前的 targetMap对象中的target
    let depsMap = targetMap.get(target);
    // 当没有target对象时 创建一个对象并将其set到targetMap
    if (!depsMap) {
        // Map 构造函数 保存键值对并且能记住键的原始插入记录
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
    // 获取当前target的key
    let deps = depsMap.get(key);
    // 当前没有target对象key是创建一个set对象并set到target中
    if (!deps) {
        // Set() 构造函数 创建一个set对象 允许存储任何类型的唯一值
        deps = new Set();
        depsMap.set(key, deps);
    }
    // 最后将activeEffect添加至创建的new Set()对象
    deps.add(activeEffect);
};
// 更新依赖
export const trigger = (target, key) => {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        throw '没有数据';
    }
    const deps = depsMap.get(key);
    deps.forEach((effect) => {
        if (effect.options.scheduler) {
            effect.options.scheduler();
        }
        else {
            effect();
        }
    });
};
