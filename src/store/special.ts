import React from 'react'
// import {homeList} from './type/homeify'
import {observable,action,computed} from 'mobx'
import {getSpecialData} from '../api/special'

import { SpecialType } from '../util/special'

export default class HomeStore{
    @observable
    dataList: SpecialType = {
        data:[]
    }
   
    @action
   async  getSpecialData(){
     const res =await getSpecialData();
     console.log(res)
     this.dataList=res.data
    
 } 
}