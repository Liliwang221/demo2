import request from "../util/request";
//分类左侧数据
export let getListData=()=>{
    return request.get('/catalog/index')
}
//分类右侧数据
export let getRightData=(id:string)=>{
    return request.get('/catalog/current',{params:{id}})
}
