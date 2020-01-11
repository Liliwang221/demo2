import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styleOnly from '../Only/only.module.scss'
import { useObserver } from "mobx-react-lite"
import useStore from '../../../util/useStore'
// import store from '../../../store'


const Only:React.FC=()=>{
    let history=useHistory();
    const back=()=>{
        
        history.push('../../main/special')
    }
    let store = useStore();
    // let { Detail } = store
    let { onlyDetail } = store
    useEffect(() => {
        onlyDetail.getOnlyData()
    }, [onlyDetail])
    return useObserver(()=>(
         <div className={styleOnly.only}>
      <div className={styleOnly.container}>
      <p onClick={()=>back()} className={styleOnly.back}>{"<"}</p>
      <div className={styleOnly.title}>{ onlyDetail.OnlyList&&onlyDetail.OnlyList.title}</div>
      </div>
      <div className={styleOnly.img}><img src={onlyDetail.OnlyList&&onlyDetail.OnlyList.content} alt=""/></div>
    </div>
    ))
   
}
export default Only;