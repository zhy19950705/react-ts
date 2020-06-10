import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
const CanvasPage = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    }
    useEffect(() => {
        const canvas: any = document.getElementById('testCanvas')
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'rgba(200, 0, 0)'
        // ctx.fillRect(0, 0, 100, 100) // 绘制填充矩形
        // ctx.strokeRect(100, 0, 100, 100) // 绘制无填充矩形
        // ctx.clearRect(0, 0, 50, 50) // 清楚矩形
        ctx.beginPath()
        ctx.arc(50, 100, 50, Math.PI, 2 * Math.PI)
        ctx.arc(150, 100, 50, Math.PI, 2 * Math.PI)
        // ctx.stroke()
        ctx.fill()
        ctx.beginPath() // 新建一条path
        ctx.moveTo(0, 100) // 移动画笔至指定位置
        ctx.lineTo(100, 200) // 绘制一条从当前位置到指定位置的直线
        ctx.lineTo(200, 100)
        if (!1) {
            ctx.closePath() // 闭合路径, 绘制当前点到起始位置的直线。如果和起始点重合，则什么都不做
            ctx.stroke() // 绘制路径
        } else {
            ctx.fill() // //填充闭合区域。如果path没有闭合，则fill()会自动闭合路径。
        }
        
    }, [])
    return (
        <div className="main-page">
            <div>
                canvas
                <Button onClick={handleClick}>canvas</Button>
            </div>
            <canvas id="testCanvas" width="300" height="300"></canvas>
        </div>
    )
}
export default CanvasPage