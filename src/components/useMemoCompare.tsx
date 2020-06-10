import React, { useRef, useEffect, useState } from 'react';
function useMemoCompare (value: any, compare: any) {
    const previousRef = useRef() // ref存储之前的值
    const previous = previousRef.current

    const isEqual = compare(previous) // 使用之前的值和当前的值比较

    useEffect(() => { 
        if (!isEqual) { // 如果不相等，使用当前值替换
            previousRef.current = value
        }
    })

    return isEqual ? previous : value // 返回新值
}

interface Props {
    obj: any
}
function MyComponent ({ obj }: Props) {
    const [state, setState] = useState()
    
    const theObj = useMemoCompare(obj, (prev: any) => prev && prev.id === obj.id) // 通过id是否相等判断

    // useEffect(() => {
    //     // Call a method on the object and set results to state
    //     return theObj.someMethod().then((value) => setState(value));
    //   }, [theObj]);

    useEffect(() => {
        obj.someMethod().then((value: any) => setState(value))
    }, [obj.id])

    return (
        <div>useMemoCompare</div>
    )
}