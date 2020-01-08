import Request from '../util/request'
//获取登录页的数据

export let getLoginData=(params:any)=>{
    return Request.post('/auth/loginByMobile',{mobile:params.mobile,password:params.password})
}
