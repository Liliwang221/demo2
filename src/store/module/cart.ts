import React from "react"
import { observable, action, computed } from "mobx"
import {Cart} from "../types/cart"
import {getCartData} from "../../api/cartApi"

export default class Carts {
    @observable
    data:Cart[]=[]

    @action
    async getCartData(){
        const res:any=await getCartData()
        console.log("res.........",res)
        this.data=res
    }
}