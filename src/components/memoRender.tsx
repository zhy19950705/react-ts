import React, { useState, useEffect } from 'react';
const Child = (props: any) => {
    const [count, setCount] = useState(() => props.callback());
    console.log('memo render')
    useEffect(() => {
        setCount(props.callback());
    }, [props.callback]);
    return <div>
        {count}
    </div>
}
export default React.memo(Child) // 用React.memo包裹
