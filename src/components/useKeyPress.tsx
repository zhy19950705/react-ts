import React, { useState, useEffect } from 'react';
function useKeyPress (targetKey: any) {
    // state for keeping track of whether key is pressed
    const [ keyPressed, setKeyPressed ] = useState(false)

    // if pressed key is our target key then set to true
    function downHandler ({ key }: { key: any}) {
        if (key === targetKey) {
            setKeyPressed(true)
        }
    }

    // if released key is our target key then set to false
    function upHandler ({ key }: { key: any }) {
        if (key === targetKey) {
            setKeyPressed(false)
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', downHandler)
        window.addEventListener('keyup', upHandler)
        return () => {
            window.removeEventListener('keydown', downHandler)
            window.removeEventListener('keyup', upHandler)
        }
    }, [])
    return keyPressed
}

function TestUseKeyPressed () {
    const happyPress = useKeyPress('h')
    const sadPress = useKeyPress('s')
    return (
        <div>
            {happyPress && 'happy'}
            {sadPress && 'sad'}
        </div>
    )
}
export default TestUseKeyPressed