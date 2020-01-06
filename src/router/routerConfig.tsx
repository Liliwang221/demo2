import React from 'react'
import RouterView from './RouterView'
import Login from "../views/login"
export default{
    routes:[
        {
            path:'/login',
            component:()=>Login
        },
        {
            path:'/main',
            component:(props:any)=>(
                <>
                <p>主页面</p>
                <RouterView routes={props.routes}></RouterView>
                </>),
                children:[
                    {
                        path:'/main/home',
                        component:()=><p>首页</p>
                    },
                    {
                        path:'/main/classify',
                        component:()=><p>分类</p>
                    },
                    {
                        path:'/main/cart',
                        component:()=><p>购物车</p>
                    },
                    {
                        path:'/main/my',
                        component:()=><p>我的</p>
                    },
                ]
               
            
        },
        {
            from:'*',
            to:'/login'
        }
    ]
}