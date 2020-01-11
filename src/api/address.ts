import request from "../util/request";
export let getAddressData=()=>{
    return request.get('/address/list')
}