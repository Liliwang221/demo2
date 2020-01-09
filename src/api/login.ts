import request from '../util/request'
//获取登录页的数据

export function login(data:any) {
    // console.log(data)
    return   request({
        url: '/auth/loginByMobile',
        method: 'post',
        data
        
    })
}
