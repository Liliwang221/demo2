import React from 'react'
import Cart from './cart'
import Login from './Login'
import Home from './Home'
import Special from './special'
import Detail from './detail'
import Classify from './classify';
import Interesting from "./module/interest"
export default {
    cart:new Cart(),
    Login:new Login(),
    Home:new Home(),
    Special:new Special(),
    Detail:new Detail(),
    classify:new Classify(),
    interesting:new Interesting()
}