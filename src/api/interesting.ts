import request from "../util/request";
//导航条数据
export let getInterestData=(id:string)=>{
    return request.get('/goods/category',{params:{id:id}})
}
//商品数据
export let getInterestList=(page:number,size:number,categoryId:number)=>{
    return request.get('/goods/list',{params:{page,size,categoryId}})
}