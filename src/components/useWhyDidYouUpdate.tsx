import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Button } from 'antd';
function useWhyDidYouUpdate(name: any, props: any) {
    const previousProps: any = useRef() // 存储props，hooks下一次运行时可以进行比较

    useEffect(() => {
        if(previousProps.current) {
            const allKeys = Object.keys({ ...previousProps.current, ...props }) // 获取所有上一次和这一次的props

            const changeObj: any = {} // store changed props

            allKeys.forEach(key => {
                if (previousProps.current[key] !== props[key]) { 
                    changeObj[key] = { // add to changesObj
                        from: previousProps.current[key],
                        to: props[key]
                    }
                }
            })

            if (Object.keys(changeObj).length) {
                console.log('[why-did-you-update]', name, changeObj)
            }
        }

        // finally update previousProps with current props for next hook call
        previousProps.current = props
    })
}

const Counter = React.memo((props:any) => {
    useWhyDidYouUpdate('Counter', props)
    return <div style={props.style}>{props.count}</div>
})

const TestUseWhyDidYouUpdate = () => {
    const [count, setCount] = useState(0)
    const [userId, setUserId] = useState(0)

    // const counterStyle = {
    //     fontSize: '3rem',
    //     color: 'red'
    // }
    const counterStyle = useMemo(() => ({
        fontSize: '3rem',
        color: 'red'
    }), [])
    return (
        <div>
            <div className="counter">
                <Counter count={count} style={counterStyle} />
                <Button onClick={() => setCount(count + 1)}>Increment</Button>
            </div>
            <div className="user">
                <img src={`http://i.pravatar.cc/80?img=${userId}`} alt=""/>
                <Button onClick={() => setUserId(userId + 1)}>Switch User</Button>
            </div>
        </div>
    )
}
export default TestUseWhyDidYouUpdate