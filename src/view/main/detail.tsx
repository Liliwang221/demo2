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
    return useObserver(()=>(
        <div>
      <div>
     <p onClick={()=>back()} className={style.back}>{"<"}</p>
      </div>
      <div className={style.container}>
      <div className={style.first}>
                    {/* {
                      Detail.DetailList.data.map((item, index) => {
                            return <div className={style.picture} key={index}>
                      <p>{DetailList.data&&DetailList.data.list_pic_url}</p>
                            </div>
                        })
                    } */}
                </div>
      </div>
    </div>
    ))
    
}
export default Detail;