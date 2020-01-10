import React from "react"
import { observable, action, computed } from "mobx"
import {getInterestData,getInterestList} from "../../api/interesting"
import { InteresrList,ShangpinList } from "../type/rightType"
export default class Interesting {
    //导航条数据
    @observable
    list:InteresrList[]=[]

    @observable
    front_name:any

    @observable
    name:any
    //商品数据
    @observable
    data:ShangpinList[]=[]

    @observable
    navShangpin:number=0



    @action
   async getInterestData(id:string){
       let res=await getInterestData(id)
       this.list=res.data.brotherCategory
       this.name=res.data.currentCategory.name
       this.front_name=res.data.currentCategory.front_name
   }
   @action 
   async getInterestList(page:number,size:number,categoryId:number){
       let res=await getInterestList(page,size,categoryId)
       this.data=res.data.data
   }
}