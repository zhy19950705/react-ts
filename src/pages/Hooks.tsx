import React from 'react';
import TestUseAsync from '../components/useAsync';
import TestUseRouter from '../components/useRouter';
import TestUseEventListener from '../components/useEventListener';
import TestUseWhyDidYouUpdate from '../components/useWhyDidYouUpdate';
import TestUseScript from '../components/useScript';
import TestUseKeyPress from '../components/useKeyPress';
import TestUseLocalStorage from '../components/useLocalStorage';
const HooksPage = () => {

    return (
        <>
            <TestUseAsync></TestUseAsync>
            <TestUseRouter></TestUseRouter>
            <TestUseEventListener></TestUseEventListener>
            <TestUseWhyDidYouUpdate></TestUseWhyDidYouUpdate>
            {/* <TestUseScript></TestUseScript> */}
            <TestUseKeyPress></TestUseKeyPress>
            <TestUseLocalStorage></TestUseLocalStorage>
        </>
    )
}
export default HooksPage