import request from "../util/request";
//分类左侧数据
export let getInterestData=()=>{
    return request.get('/goods/category')
}