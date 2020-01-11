import React from 'react'
// import {homeList} from './type/homeify'
import {observable,action,computed} from 'mobx'
import {getOnlyData} from '../api/onlyDetail'

// import {DetailType} from '../util/detail'


export default class DetailStore{
    @observable
    OnlyList:any
    
    @observable
      id:any
     
    @action
    async getOnlyData() {
        this.id=localStorage.getItem('id')
        let res = await getOnlyData(this.id);
        console.log(res)
        this.OnlyList=res.data
        console.log(res.data)
    }
  

}