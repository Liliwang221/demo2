import React from 'react'
import style from '../login/login.module.scss'
import { useObserver } from "mobx-react-lite"
import {useHistory} from 'react-router-dom'
import useStore from '../../util/useStore'
// import { login } from '../../api/login'
// import { login } from '../../api/login'

const Login:React.FC=()=>{
  let store = useStore();
  let { login } = store;

   let history=useHistory();
   const jump=()=>{
      login.login()
     console.log(login.login)
     if (login.jump && Object.values(login.jump).length > 0) {
      history.push('/main')
    } else {
      alert("您输入的信息有误！")
    }

   }
 

    return useObserver(()=>(
      <div className={style.loginBox}>
      <div className={style.logo}>
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
      </div>
      <div className={style.main}>
        <p className={style.zhanghao}><input type="text" placeholder="请输入手机号" value={login.user} onChange={e=>login.changeUser(e.target.value)}/></p>
       <p className={style.password}> <input type="text" placeholder="请输入密码" value={login.pwd} onChange={e=>login.changePwd(e.target.value)}/></p>
        <div>
         <div className={style.login}>
         <input type="button" value="登 陆" onClick={() =>{jump()} } />
         </div>
      </div>
       </div>
     
      </div>
    ))
    
   
    
}
export default Login;