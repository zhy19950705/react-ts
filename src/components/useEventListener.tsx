import React, { useRef, useEffect, useState, useCallback } from 'react';
function useEventListener (eventName: any, handler: any, element = window) {
    
    const saveHandler:any = useRef() // 使用ref存储handler

    useEffect(() => { // 当handler更新时，更新ref.current
        saveHandler.current = handler
    }, [handler])

    useEffect(() => {
        const isSupported = element && element.addEventListener // 确认element支持addEventListener
        if (!isSupported) return

        const eventListener = (event: any) => saveHandler.current(event) // 创建存储在ref中的eventListener

        element.addEventListener(eventName, eventListener) // 添加监听事件

        return () => { // 移除监听事件
            element.removeEventListener(eventName, eventListener)
        }
    }, [eventName, element]) // 只有eventName element改变的时候才会执行
}
const TestUseEventListener = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    const handler = useCallback(({ clientX, clientY }) => {
        setCoords({ x: clientX, y: clientY})
    }, [setCoords])

    useEventListener('mousemove', handler)

    return (
        <h1>the mouse position is ({ coords.x }, { coords.y })</h1>
    )
}
export default TestUseEventListener