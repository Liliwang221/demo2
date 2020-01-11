import React from "react"
import { observable, action, computed } from "mobx"
import {AddressList} from "../type/rightType"
import {getAddressData} from "../../api/address"
export default class Address {
    @observable
   list:AddressList[]=[]

    @action
    async getAddressData(){
       let res=await getAddressData()
       console.log(res)
    }
}