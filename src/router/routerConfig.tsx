import React from 'react'
import Login from '../view/login/login'
import Main from '../view/main/main'
import Home from '../view/main/home'
import Classify from '../view/main/classify'
import Special from '../view/main/special'
import Cart from '../view/main/cart'
import My from '../view/main/my'
import Detail from '../view/main/detail'
import Onlydetail from '../view/main/Only/only'

import NavSearch from "../view/module/navSearch"
import Interesting from '../view/module/interesting';
import Collection from "../view/module/collection"//收藏
import Address from "../view/module/address"//地址
import NewAddress from "../view/module/newAddress"

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
           },{
               path:"/collection",
               component:Collection
           },{
               path:"/address",
               component:Address
           },{
            path:"/newAddress",
            component:NewAddress
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
                    path: '/main/special',
                    component: Special
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
                },
                {
                    path: '/main/Only/only',
                    component: Onlydetail
                }
            ]


        },
        {
            from: '*',
            to: '/login'
        }
    ]
}