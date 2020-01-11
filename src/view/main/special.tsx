import React, { useEffect } from 'react'
import styleSpecial from '../main/special.module.scss'
// import useState from '../../util/useStore'
import { useObserver } from "mobx-react-lite"
import useStore from '../../util/useStore'

const Special:React.FC<any>=(props)=>{
    const detailOnly=(id:string)=>{
        console.log(id)
        localStorage.setItem('id',id)
       
        props.history.push('./Only/only')
    }
    let store = useStore();
    let { Special } = store
    useEffect(() => {
        Special.getSpecialData()
    }, [Special])
    return useObserver(()=>(
        <div className={styleSpecial.special}>
          <div className={styleSpecial.container}>
              {
                  Special.dataList.data.map((item,index)=>{
                    return <div className={styleSpecial.dataList} key={index} onClick={()=>{detailOnly(item.id)}}>
                  <p><img src={item.scene_pic_url} alt=""/></p>
                 <div className={styleSpecial.dataItem}>
                 <p>{item.title}</p>
                  <p>{item.subtitle}</p>
                  <p>{item.price_info}元起</p>
                 </div>
                    </div>
                  })
              }
              </div>   
        </div>
    ))
       
}
export default Special;