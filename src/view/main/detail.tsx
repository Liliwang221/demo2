import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import style from '../main/detail.module.scss'
import { useObserver } from "mobx-react-lite"
import useStore from '../../util/useStore'

const Detail:React.FC=()=>{
    let history=useHistory();
    const back=()=>{
        
        history.push('./home')
    }
    let store = useStore();
    let { Detail } = store
    
    useEffect(() => {
        Detail.getDetailData()
    }, [Detail])
    useEffect(() => {
        Detail.getStoreData()
    }, [Detail])
    return useObserver(()=>(
        <div className={style.detail}>
      
      <div className={style.container}>
     <p onClick={()=>back()} className={style.back}>{"<"}</p>
      <div className={style.title}>{ Detail.DetailList&&Detail.DetailList.name}</div>
      </div>
      <div className={style.img}><img src={Detail.DetailList&&Detail.DetailList.list_pic_url} alt=""/></div>
    <div className={style.simple_desc}>{Detail.DetailList&&Detail.DetailList.simple_desc}</div>
    <div>

    </div>
    </div>
    
    ))
    
}
export default Detail;