import React from 'react'
// import {homeList} from './type/homeify'
import {observable,action,computed} from 'mobx'
import {getDetailData} from '../api/detail'
import {DetailType} from '../util/detail'


export default class DetailStore{
    @observable
    DetailList: DetailType = {
        data:[]
    }
    
    @observable
      id:any
    @action
    async getDetailData() {
        this.id=localStorage.getItem('id')
        let res = await getDetailData(this.id);
        console.log(res)
        this.DetailList=res.data.brand
        console.log(res.data.brand)
    }
}