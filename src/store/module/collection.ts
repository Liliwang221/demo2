import React from "react"
import { observable, action, computed } from "mobx"
import {CollectionList} from "../type/rightType"
import {getCollectionList} from "../../api/collection"

export default class Collection {
    @observable
    list:CollectionList[]=[]

    @action
    async getCollectionList(params:object){
        let res=await getCollectionList(params)
        console.log(res.data)
        this.list=res.data
    }
}