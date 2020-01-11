import React from 'react'
import Cart from './cart'
import Login from './Login'
import Home from './Home'
import Special from './special'
import Detail from './detail'
import OnlyDetail from './onlyDetail'
import Classify from './classify';
import Interesting from "./module/interest"
import Shangpin from "./module/interest"
import Collection from "./module/collection"
import Address from "./module/address"


export default {
    cart:new Cart(),
    Login:new Login(),
    Home:new Home(),
    Special:new Special(),
    Detail:new Detail(),
    classify:new Classify(),
    interesting:new Interesting(),
    shangpin:new Shangpin(),
    collection:new Collection(),
    OnlyDetail:new OnlyDetail(),
    address:new Address()
}