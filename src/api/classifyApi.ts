import request from "../util/request";
export let getListData=()=>{
    return request.get('/catalog/index')
}