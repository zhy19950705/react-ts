/** 记忆函数 */
export const memorize2 = (fn: Function) => {
    const cache: any = {} // 存储缓存数据的对象
    return function (...args: any) {
        const _args = JSON.stringify(args) // 将参数作为cache的key
        return cache[_args] || (cache[_args] = fn.apply(fn, args)) // 如果已经缓存过直接取值，否则重新计算并且缓存
    }
}

/** usestate */
let memorizeStates:any = [] // 缓存state
let index = 0 // 初始index
function useState(initialState: any) {
    memorizeStates[index] = memorizeStates[index] || initialState 
    let currentIndex = index
    function setState(newState: any) { // 闭包保存当前index
        memorizeStates[currentIndex] = newState // 根据闭包保存的Index更新state
        render() // state发生变化，重新渲染
    }
    return [memorizeStates[index++], setState] // 返回可以解构的结构
}
function render() {
    index = 0 // 重新执行函数组件，重新清零
    // ReactDOM.render(组件, document.getElementById('root'))
}
 