import request from '../util/request'
//获取详情页的数据

export function getOnlyData(id:string) {
    // console.log(data)
    return   request({
        url: '/topic/detail',
        method: 'get',
        params:{id}
        
    })
}