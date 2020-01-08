import React from 'react'
// import {homeList} from './type/homeify'
import {observable,action,computed} from 'mobx'
import {getSpecialData} from '../api/special'
interface ItemType{
    specialList:any
}
export default class HomeStore{
    @observable
    specialList:any[]=[]
   
    @action
   async  getSpecialData(){
     const res:any=await getSpecialData();
     console.log(res)
     this.specialList=res.data
    
 } 
}