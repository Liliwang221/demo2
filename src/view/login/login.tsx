import React,{useEffect} from 'react'
import style from '../login/login.module.scss'
import { useObserver } from "mobx-react-lite"
import {useHistory} from 'react-router-dom'
import useStore from '../../util/useStore'

let Login:React.FC=()=>{
  let store = useStore();
  let { Login } = store;
   let history=useHistory();
   let useInfo=async()=>{
     await Login.login()
     if (Login.userInfo && Object.values(Login.userInfo).length > 0) {
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
        {
          Login.login.map((item,index)=>{
           return <div className={style.message} key={index}>
               <p className={style.zhanghao}><input type="text" placeholder="请输入账号" defaultValue={15323807318} /></p>
        <p className={style.password}><input type="password" placeholder="请输入密码" defaultValue={123456}/></p>
            </div>
          })
        }
       
        <div>
         <button className={style.login}>登录</button>
      </div>
       </div>
     
      </div>
    ))
    
   
    
}
export default Login;