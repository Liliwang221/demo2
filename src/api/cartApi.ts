import request from "../util/request";
export let getCartData=()=>{
    return request.get('/cart/index')
}