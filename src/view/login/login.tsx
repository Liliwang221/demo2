import React,{useEffect} from 'react'
import style from '../login/login.module.scss'
import { useObserver } from "mobx-react-lite"
import {useHistory} from 'react-router-dom'
import useStore from '../../util/useStore'

const Login:React.FC=()=>{
  let store = useStore();
  let { Login } = store;

   let history=useHistory();
   const jump=()=>{
      Login.login()
     if (Login.jump && Object.values(Login.jump).length > 0) {
      history.push('/main/home')
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
        <p className={style.zhanghao}><input type="text" placeholder="请输入手机号" value={Login.user} onChange={e=>Login.changeUser(e.target.value)}/></p>
       <p className={style.password}> <input type="text" placeholder="请输入密码" value={Login.pwd} onChange={e=>Login.changePwd(e.target.value)}/></p>
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