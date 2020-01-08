import React from 'react'
import style from '../login/login.module.scss'
const Login:React.FC=()=>{
    return<div className={style.loginBox}>
      <div className={style.logo}>
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
      </div>
      <div className={style.main}>
        <p className={style.zhanghao}><input type="text" placeholder="请输入账号" defaultValue={15323807318} /></p>
        <p className={style.password}><input type="password" placeholder="请输入密码" defaultValue={123456}/></p>
        <div>
         <button className={style.login}>登录</button>
      </div>
       </div>
     
      </div>
    
}
export default Login;