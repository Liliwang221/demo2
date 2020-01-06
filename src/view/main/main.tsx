import React from 'react'
import {NavLink} from "react-router-dom"
import "../../scss/main.css"
import RouterView from '../../router/RouterView'
const Main: React.FC = (props:any) => {
    return (
        <div className="main">
            <div className="bodys">
                <RouterView routes={props.routes}></RouterView>
            </div>
            <footer>
                <ul>
                    <li><p>123</p><NavLink to="/main/home">首页</NavLink></li>
                    <li><p></p><NavLink to="/main/only">专题</NavLink></li>
                    <li><p></p><NavLink to="/main/classify">分类</NavLink></li>
                    <li><p></p><NavLink to="/main/cart">购物车</NavLink></li>
                    <li><p></p><NavLink to="/main/my">我的</NavLink></li>
                </ul>
            </footer>
        </div>)
}
export default Main;