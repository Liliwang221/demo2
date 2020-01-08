import React, { useEffect } from 'react'
import style from "../../scss/classify.module.scss"
import useStore from '../../util/useStore'
import { useObserver } from "mobx-react-lite"

const Classify: React.FC<any> = (props) => {
    let store = useStore();
    let { classify } = store
    useEffect(() => {
        classify.getListData()
    }, [])
    //左侧点击
    let dataClickFn = (id: string, index: number) => {
        store.classify.indexInfo = index
        store.classify.getRightData(id)
    }
    //点击搜索框
    let tiaoClickFn = () => {
        props.history.push("/navSearch")
    }
    return useObserver(() => (
        <div className={style.classify}>
            {/* 头部搜索框 */}
            <div className={style.search}>
                <input type="text" placeholder="搜索商品，共239款好物" onClick={() => tiaoClickFn()} />
            </div>
            <div className={style.wrapper}>
                {/* 左侧 */}
                <div className={style.leftWrap}>
                    <ul>
                        {
                            classify.list.map((item: any, index) => {
                                return <li key={index}
                                    className={`${store.classify.indexInfo === index ? style.active : ""}`}
                                    onClick={() => dataClickFn(item.id, index)}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
                {/* 右侧 */}
                <div className={style.rightWrap}>
                    {/* {
                        classify.data.map((item, index) => {
                            return  */}
                    <div className={style.wrap}>
                        <div className={style.imgWrap}>
                            <img src={store.classify.RightList.wap_banner_url} />
                            <span>{store.classify.RightList.front_name}</span>
                        </div>
                        <div className={style.titleWrap}>--{store.classify.RightList.name}分类--</div>
                        <div className={style.shangpinImg}>
                            {
                              store.classify.RightList.subCategoryList.map((item:any,index:any)=>{
                                  return <div className={style.shangpin} key={index}>
                                  <img src={item.wap_banner_url}/>
                                  <p>{item.name}</p>
                              </div>
                              })  
                            }
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    ))
}
export default Classify;