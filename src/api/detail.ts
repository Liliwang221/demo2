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
export function getStoreData(brandid:string) {
    return   request({
        url: '/goods/list',
        method: 'get',
        params:{brandid}
        
    })
}