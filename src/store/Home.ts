import React from 'react'
// import {homeList} from './type/homeify'
import {observable,action,computed} from 'mobx'
import {getHomeData} from '../api/home'
interface ItemType{
    // 获取雪碧图的数据
    homeList:any,
    //获取品牌数据
    brandList:any,
    //获取新品数据
    newGoodList:any,
    //获取人气数据
    hotGoodList:any,
    //获取专题数据
    topGoodList:any,
    //获取居家分类数据
    cateGoryList:any
}
export default class HomeStore{
    @observable
    homeList:any[]=[]
    @observable
    brandList:any[]=[]
    @observable
    newGoodList:any[]=[]
    @observable
    hotGoodList:any[]=[]
    @observable
    topGoodList:any[]=[]
    @observable
    cateGoryList:any[]=[]

    @action
   async  getHomeData(){
     const res:any=await getHomeData();
     console.log(res)
     this.homeList=res.channel
    //  console.log(res.channel)
     this.brandList=res.brandList
    //  console.log(res.brandList)
     this.newGoodList=res.newGoodsList
    //  console.log(res.newGoodsList)
    this.hotGoodList=res.hotGoodsList
    // console.log(res.hotGoodsList)
    this.topGoodList=res.topicList
    // console.log(res.topicList)
    this.cateGoryList=res.categoryList
    console.log(res.categoryList)
 } 
}