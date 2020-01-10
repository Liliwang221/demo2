import React, { useEffect } from 'react'
import useStore from '../../util/useStore'
import { useObserver } from "mobx-react-lite"
import style from "../../scss/collection.module.scss"

const Collection:React.FC<any>=(props)=>{
    // let size=1000
    let store = useStore();
    let { collection } = store
    useEffect(()=>{
        collection.getCollectionList({typeId:1})
    })
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
             <div className={style.wrapper}>
                 <div className={style.img}>
                     <img/>
                 </div>
                 <div className={style.boxs}>
                     <p>趣味粉彩系列</p>
                     <p className={style.reduice}>慢回弹海绵</p>
                     <span>￥49</span>
                 </div>
             </div>
         </main>
    </div>
    ))
     
}
export default Collection;


// import React from 'react'
// import useStore from '../../util/useStore'
// import { useObserver } from "mobx-react-lite"


// const Collection:React.FC=()=>{
//     return useObserver(()=>(
//     <div>
//          收藏
//     </div>
//     ))
     
// }
// export default Collection;