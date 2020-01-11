import React, { useEffect } from 'react'
import useStore from '../../util/useStore'
import { useObserver } from "mobx-react-lite"
import style from "../../scss/collection.module.scss"

const Collection:React.FC<any>=(props)=>{
    let store = useStore();
    let { collection } = store
    useEffect(()=>{
        collection.getCollectionList({typeId:0})
    },[])
    //点击返回
    let fanhuiacalickFn=()=>{
        props.history.goBack()
    }
    return useObserver(()=>(
    <div className={style.collection}>
         <header>
             <span className="iconfont" onClick={()=>fanhuiacalickFn()}>&#xe501;</span>
             <p>easyLikeGoods</p>
         </header>
         <main>
             {
               collection.list.map((item,index)=>{
                   return <div className={style.wrapper} key={index}>
                   <div className={style.img}>
                       <img src={item.list_pic_url}/>
                   </div>
                   <div className={style.boxs}>
                       <p>{item.name}</p>
                       <p className={style.reduice}>{item.goods_brief}</p>
                       <span>￥{item.retail_price}</span>
                   </div>
               </div>
               })  
             }
             
         </main>
    </div>
    ))
     
}
export default Collection;


