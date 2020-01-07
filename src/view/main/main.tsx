import React from 'react'
import {NavLink} from "react-router-dom"
import style from "../../scss/main.module.scss"
import RouterView from '../../router/RouterView'
const Main: React.FC = (props:any) => {
    return (
        <div className={style.main}>
            <div className={style.bodys}>
                <RouterView routes={props.routes}></RouterView>
            </div>
            <footer>
                <ul>
                    <li><NavLink to="/main/home"><p>123</p>首页</NavLink></li>
                    <li><NavLink to="/main/only"><p></p>专题</NavLink></li>
                    <li><NavLink to="/main/classify"><p></p>分类</NavLink></li>
                    <li><NavLink to="/main/cart"><p></p>购物车</NavLink></li>
                    <li><NavLink to="/main/my"><p></p>我的</NavLink></li>
                </ul>
            </footer>
        </div>)
}
export default Main;