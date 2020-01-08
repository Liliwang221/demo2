import React from 'react'
import {LoginList} from './type/Loginify'
import {observable,action,computed} from 'mobx'
import {getLoginData} from '../api/login'
export default class LoginStore{
    @observable
    list: LoginList[] = [];


    @action
   async  getLoginData(obj:object){
     const res:any=await getLoginData(obj);
     console.log(res)
     this.list=res.data
 } 
}