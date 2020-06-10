import React, { useState, useCallback, useEffect } from 'react';
import { Button } from 'antd';
const useAsync = (asyncFunction: any, immediate: Boolean = true) => {
    const [pending, setPending] = useState(false)
    const [value, setValue] = useState(null)
    const [error, setError] = useState(null)

    const execute = useCallback(() => { // useCallback保证只有asyncFunction变化的时候下面的effect执行
        setPending(true)
        setValue(null)
        setError(null)
        return asyncFunction()
            .then((response: any) => setValue(response))
            .catch((error: any) => setError(error))
            .finally(() => setPending(false))
    }, [asyncFunction])

    useEffect(() => { // 如果immediate为true，立马执行，否则可以通过点击按钮执行
        if (immediate) {
            execute()
        }
    }, [execute, immediate])

    return { execute, pending, value, error }
}

function myFunction () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rnd = Math.random() * 10
            rnd <= 5 ? resolve('successfully') : reject('error')
        }, 2000)
    })
}


const TestUseAsync = () => {
    const { execute, pending, value, error } = useAsync(myFunction, false)
    return (
        <div>
            { value && <div>{value}</div> }
            { error && <div>{error}</div> }
            <Button onClick={execute} disabled={pending}>
                {!pending ? 'Click me' : 'Loading'}
            </Button>
        </div>
    )
    
}
export default TestUseAsync