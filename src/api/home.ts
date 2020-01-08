import Request from '../util/request'
//获取首页的数据

export let getHomeData=()=>{
    return Request.get('/')
}
