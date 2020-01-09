import Request from '../util/request'
//获取专题的数据

export let getSpecialData=()=>{
    return Request.get('/topic/list')
}
