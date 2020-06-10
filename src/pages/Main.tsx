import React from 'react';
import {
    withRouter
} from "react-router-dom";
import { Menu } from 'antd';
interface props {
    history: any
}
const MainPage = ({ history }: props) => {
    const handleClick = (e: any) => {
        console.log(e)
        history.push(`/${e.key}`)
    }
    return (
        <div style={{width: 200}}>  
            <Menu onClick={handleClick}>
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="canvas">Canvas</Menu.Item>
                <Menu.Item key="hooks">Hooks</Menu.Item>
                
            </Menu>
        </div>
    )
}
export default withRouter(MainPage)