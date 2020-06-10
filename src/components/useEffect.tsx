import React, { useState, useEffect, useRef } from 'react';
const EffectExample = React.forwardRef((props: any, ref: any) => {
    const [data, setData] = useState(1)
    useEffect(() => {
        let timer = setInterval(() => {
            setData(data + 1)
        }, 1000)
        return () => clearInterval(timer)
    })
    // 闭包陷阱
    // 重新渲染后重新声明count变量，也就是说setInterval里访问的data变量跟这次重新声明的data变量无关
    // useEffect(() => {
    //     let timer = setInterval(() => {
    //         setData(data + 1)
    //     }, 1000)
    //     return () => clearInterval(timer)
    // }, [])
    return (
        <div ref={ref}>
            <div>{data}</div>
            <div>{props.count}</div>
        </div>
    )
})
export default EffectExample