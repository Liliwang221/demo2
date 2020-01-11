import React from 'react'
// import {homeList} from './type/homeify'
import {observable,action,computed} from 'mobx'
import {getDetailData,getStoreData} from '../api/detail'

import {DetailType} from '../util/detail'


export default class DetailStore{
    @observable
    DetailList:any
    @observable
    storeData:any
    @observable
      id:any
      @observable
      brandid:any
    @action
    async getDetailData() {
        this.id=localStorage.getItem('id')
        let res = await getDetailData(this.id);
        console.log(res)
        this.DetailList=res.data.brand
        console.log(res.data.brand)
    }
    @action
    async getStoreData(){
        this.brandid=localStorage.getItem('brandid')
        let res=await getStoreData(this.brandid)
        console.log(res)
        this.storeData=res.data.data
        console.log(res.data.data)
    }

}