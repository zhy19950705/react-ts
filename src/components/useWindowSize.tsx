import React, { useState, useEffect } from 'react';
// Hook
function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}
// Usage
function TestUseWindowSize() {
    const size = useWindowSize();

    return (
        <div>
            {size.width}px / {size.height}px
        </div>
    );
}