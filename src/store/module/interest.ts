import React from "react"
import { observable, action, computed } from "mobx"
import {getInterestData} from "../../api/interesting"
import { InteresrList } from "../type/rightType"
export default class Interesting {
    @observable
    list:InteresrList[]=[]

    @action
   async getInterestData(){
       let res=await getInterestData()
       console.log(res)
       
   }
}