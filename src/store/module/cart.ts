import React from "react"
import { observable, action, computed } from "mobx"
import { CartList } from "../types/cart"
import { getCartData } from "../../api/cartApi"

export default class Carts {
    @observable
    list: CartList[] = []

    @action
    async getCartData() {
        const res: any = await getCartData()
        console.log("res.........", res)
        this.list = res.cartList
    }
}