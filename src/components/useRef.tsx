import React, { Component, useRef, useEffect } from 'react';
/** 函数组件没有实例 */
const RefExample1 = React.forwardRef((props: any, ref: any) => {
    return (
        <div ref={ref}>{props.count}</div>
    )
})
export default RefExample1

// class RefExample2 extends Component {
//     render() {
//         const { count } = this.props
//         return (
//             <div>{count}</div>
//         )
//     }
// }



// Ref 不仅可以拿到组件引用、创建一个 Mutable 副作用对象，
// 还可以配合 useEffect 存储一个较老的值，最常用来拿到 previousProps，React 官方利用 Ref 封装了一个简单的 Hooks 拿到上一次的值：
// const usePrevious = (value: any) => {
//     const ref = useRef()
//     useEffect(() => {
//         ref.current = value
//     })
//     return ref.current
// }