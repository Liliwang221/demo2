import React, { useEffect } from 'react'
import style from "../../scss/classify.module.scss"
import useStore from '../../util/useStore'

const Classify: React.FC<any>= (props) => {
    // let {data,setData}=useStore()
    let store = useStore();
    let { classify } = store
    useEffect(() => {
        classify.getListData()
    })
//左侧点击
let dataClickFn=(e: React.MouseEvent<HTMLLIElement, MouseEvent>,item:object)=>{
console.log("7777777777777",e,item)
}
//点击搜索框
let tiaoClickFn=()=>{
    props.history.push("/navSearch")
}
    return (
        <div className={style.classify}>
            <div className={style.search}>
                <input type="text" placeholder="搜索商品，共239款好物" onClick={()=>tiaoClickFn()}/>
            </div>
            <div className={style.wrapper}>
                <div className={style.leftWrap}>
                    <ul>
                        {
                            classify.list.map((item, index) => {
                                return <li key={index} className={style.active} onClick={e=>dataClickFn(e,item)}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className={style.rightWrap}>
                    {
                        classify.list.map((item, index) => {
                            return <div className={style.wrap} key={index}>
                                <div className={style.imgWrap}>
                                    <img src={item.wap_banner_url}/>
                                    <span>{item.front_name}</span>
                                </div>
                                <div className={style.titleWrap}>--{item.name}分类--</div>
                                <div className={style.shangpinImg}>
                                    {/* {item.subCategoryList.map((ite,i)=>{
                                        return <div className={style.shangpin}>
                                         <img/>
                                    <p>{ite.name}</p>
                                     </div>
                                    })} */}
                                     <div className={style.shangpin}>
                                         <img/>
                                        <p>布艺软装</p>
                                     </div>
                                     <div className={style.shangpin}>
                                         <img/>
                                        <p>被枕</p>
                                     </div>
                                     <div className={style.shangpin}>
                                         <img/>
                                        <p>被枕</p>
                                     </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}
export default Classify;