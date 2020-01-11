import React,{useEffect} from 'react'
import useStore from '../../util/useStore'
import { useObserver } from "mobx-react-lite"
import style from "../../scss/address.module.scss"

const Address:React.FC<any>=(props)=>{
    let store = useStore();
    let { address } = store
    useEffect(()=>{
        address.getAddressData()
    },[])
    //添加地址
    let newAddressFn=()=>{
        props.history.push("/newAddress")
    }
    //返回
    let fanhuiFn=()=>{
        props.history.goBack()
    }
    return useObserver(()=>(
    <div className={style.address}>
        {/* 头 */}
         <div className={style.header}>
             <span className="iconfont" onClick={()=>fanhuiFn()}>&#xe501;</span>
             <p>地址管理</p>
         </div>

         <div className={style.imgs}></div>
        {/* 地址信息 */}
         <div className={style.content}>
            <div className={style.addresslist}>
                <div className={style.peoplename}>
                    太容易
                </div>
                <div className={style.info}>
                    <p className={style.p}>15896345863</p>
                    <span>北京市东城区</span>
                    <p>和公交回家了</p>
                </div>
                <div className={style.removes}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEVmZmZtbW1ubm5wcHCJiYmKioqOjo6Tk5OUlJSVlZXm5ubn5+fv7+/y8vL////PAON/AAAAa0lEQVQ4y2N4hwsw0F8mgIGBgRWrDAMIoMokMKADNoIy6O5gwCAHgUwoThkGEmWexiFTyDIP+JCpUZmBkXnqh0wRH9shA5dGBe4hSbxlRJJpqEGSOcmBJLMYJS9aIcm8noQkobluoModNAAADGfUnhuYO1kAAAAASUVORK5CYII="/>
                </div>
            </div>
         </div>
         {/* 新建地址 */}
         <div className={style.footer} onClick={()=>newAddressFn()}>
             新建地址
         </div>
    </div>
    ))
     
}
export default Address;



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