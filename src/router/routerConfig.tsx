
// 获取范型接口
import { IRouterItem } from './index.d'

// 一级路由
import Login from '../view/login/login'
import Main from '../view/main/main';
import NavSearch from "../view/module/navSearch"

// 二级路由

import Home from "../view/main/home"
import Only from "../view/main/only"
import Cart from "../view/main/cart"
import My from "../view/main/my"
import Classify from "../view/main/classify"
/**
 * 路由数据列表
 * type 类型 普通路由 route  重定向redirect
 * path 导航栏显示路由路径
 * component 路由组件
 * children 后代路由
 * to 跳转去那里
 * from 来自哪里
 */
const RouterConfig:IRouterItem[]=[
   {
    type:"route",
    path:'/main',
    component:Main,
    children:[
        {
            type:"route",
            path:'/main/home',
            component:Home,
            children:[]
           },
           {
            type:"route",
            path:'/main/classify',
            component:Classify,
            children:[]
           },
           {
            type:"route",
            path:'/main/only',
            component:Only,
            children:[]
           },
           {
            type:"route",
            path:'/main/cart',
            component:Cart,
            children:[]
           },
           {
            type:"route",
            path:'/main/my',
            component:My,
            children:[]
           }
    ]
   },
   {
    type:"route",
    path:'/login',
    component:Login,
    children:[]
   },{
    type:"route",
    path:'/navSearch',
    component:NavSearch,
    children:[]
   },
    {
     type:"redirect",
     from:"/",
     to:"/main/home"
    }
]

export default RouterConfig