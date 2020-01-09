import React from 'react'
import Login from '../view/login/login'
import Main from '../view/main/main'
import Home from '../view/main/home'
import Classify from '../view/main/classify'
import Only from '../view/main/special'
import Cart from '../view/main/cart'
import My from '../view/main/my'
import Detail from '../view/main/detail'
import NavSearch from "../view/module/navSearch"
import Interesting from '../view/module/interesting';

export default {
    routes: [
        {
            path: '/login',
            component: Login
        },{
            
            path:'/navSearch',
            component:NavSearch,
            
           },{
               path:"/interest",
               component:Interesting
           },
        {
            path: '/main',
            component: Main,
            children: [
                {
                    path: '/main/home',
                    component: Home
                },
                {
                    path: '/main/classify',
                    component: Classify
                },
                {
                    path: '/main/only',
                    component: Only
                },
                {
                    path: '/main/cart',
                    component: Cart
                },
                {
                    path: '/main/my',
                    component: My
                },
                {
                    path: '/main/detail',
                    component: Detail
                }
            ]


        },
        {
            from: '*',
            to: '/login'
        }
    ]
}