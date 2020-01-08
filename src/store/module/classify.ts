import React from "react"
import { ClassifyList } from "../types/classify"
import { observable, action, computed } from "mobx"
import {getListData} from "../../api/classifyApi"

export default class Classify {
    @observable
    list: ClassifyList[] = []
    @observable
    indexInfo:number=0
    // data: ShangpinData[]=[]

    @action
    async getListData(){
        const res:any=await getListData()
        console.log("res.....",res.categoryList)
        this.list=res.categoryList
    }
}