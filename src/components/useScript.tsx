import React, { useState, useEffect } from 'react';

let cachedScripts: Array<string> = []
function useScript (src: string) {
    // keeping track of script loaded and error state
    const [state, setState] = useState({
        loaded: false,
        error: false,
    })
    useEffect(() => {
        // if cachedScirpts includes src that means another instance of this hook alread loaded this script
        // so not need to load again
        if (cachedScripts.includes(src)) {
            setState({
                loaded: true,
                error: false,
            })
        } else {
            cachedScripts.push(src)
            // create script
            let script = document.createElement('script')
            script.src = src
            script.async = true
            // script event listener callbacks for load and error
            const onScriptLoad = () => {
                setState({
                    loaded: true,
                    error: false
                })
            }
            const onScriptError = () => {
                setState({
                    loaded: true,
                    error: true
                })
            }
            script.addEventListener('load', onScriptLoad)
            script.addEventListener('error', onScriptError)

            // add script to document body
            document.body.appendChild(script)

            return () => {
                script.removeEventListener('load', onScriptLoad)
                script.removeEventListener('error', onScriptError)
            }
        }
    }, [src])

    return [state.loaded, state.error]
}

// interface MyWindow extends Window {
//     TEST_SCRIPT: any;
// }
 
// declare var window: MyWindow;

function TestUseScript () {
    const [ loaded, error ] = useScript('https://pm28k14qlj.codesandbox.io/test-external-script.js')
    return (
        <div>
            <div>script loaded: <b>{loaded.toString()}</b></div>
            {
                loaded && !error && (
                    <div>
                        {/* script function call response: <b>{TEST_SCRIPT.start && TEST_SCRIPT.start()}</b> */}
                    </div>
                )
            }
        </div>
    )
}
export default TestUseScript