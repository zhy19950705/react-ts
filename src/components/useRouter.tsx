import React, { useMemo } from 'react';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import { Button } from 'antd';
function useRouter () {
    const params = useParams()
    const location = useLocation()
    const history = useHistory()
    const match = useRouteMatch()

    return useMemo(() => {
        return {
            push: history.push,
            replace: history.replace,
            pathname: location.pathname,
            query: {
                ...queryString.parse(location.search),
                ...params
            },
            match,
            location,
            history
        }
    }, [params, match, history, location]) // 只有这些参数改变时,重新返回对象
}

function TestUseRouter() {
    const router = useRouter()
    console.log(router.query)
    console.log(router.pathname)
    return (
        <Button onClick={(e) => router.push('/canvas')}>TestRouter</Button>
    )
}
export default TestUseRouter