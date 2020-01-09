import request from '../util/request'
//获取详情页的数据

export function getDetailData(id:string) {
    // console.log(data)
    return   request({
        url: '/brand/detail',
        method: 'get',
        params:{id}
        
    })
}