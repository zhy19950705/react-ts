import React, { useMemo, useState } from 'react';
const MemoExample = () => {
    const [count, setCount] = useState(1)
    const [val, setVal] = useState('1')
    const expensiveCal = useMemo(() => {
        console.log('compute')
        let sum = 0
        for (let i = 0; i < count * 100; i++) {
            sum += i
        }
        return sum
    }, [count])
    return (
        <div>
            <div>{expensiveCal}</div>
            <button onClick={() => setCount(count + 1)}>click</button>
            <input value={val} onChange={(e) => setVal(e.target.value)}></input>
        </div>
    )
}
export default MemoExample