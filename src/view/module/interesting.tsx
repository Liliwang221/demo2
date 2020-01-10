import React, { useEffect } from 'react'
import style from "../../scss/interest.module.scss"
import useStore from '../../util/useStore'
import { useObserver } from "mobx-react-lite"

const Interesting: React.FC<any> = (props) => {
    let page = 1
    let size = 1000
    let store = useStore();
    let { interesting, shangpin } = store
    useEffect(() => {
        let id: string = props.history.location.params.id;
        let categoryId: any = id
        interesting.getInterestData(id)//nav
        shangpin.getInterestList(page, size, categoryId)//商品
    }, [interesting, page, props.history.location.params.id, shangpin, size])
    //点击返回
    let kindClickFn = () => {
        props.history.goBack()
    }
    //点击导航条更改商品
    let shangpinClick = (id: number, index: number) => {
        store.interesting.navShangpin = index
        let categoryId: any = id
        shangpin.getInterestList(page, size, categoryId)//商品
    }
    return useObserver(() => (
        <div className={style.interesting}>
            <div className={style.header}>
                <span onClick={() => kindClickFn()}>&lt;</span>
                <p>奇趣分类</p>
            </div>
            {/* 导航条 */}
            <div className={style.nav}>
                {
                    interesting.list.map((item, index) => {
                        return <p key={index} onClick={() => shangpinClick(item.id, index)} 
                        className={`${store.interesting.navShangpin === index?style.active:''}`}>{item.name}</p>
                    })
                }
            </div>
            {/* 商品信息 */}
            <div className={style.box}>
                <p>{store.interesting.name}</p>
                <span>{store.interesting.front_name}</span>
            </div>

            {/* 商品价格、图片 */}
            <div className={style.wrapper}>
                {
                    shangpin.data.map((item, index) => {
                        return <div className={style.wrap} key={index}>
                            <div className={style.imgs}>
                                <img src={item.list_pic_url} />
                            </div>
                            <div className={style.content}>
                                <p>{item.name}</p>
                                <span>￥{item.retail_price}元</span>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    ))
}

export default Interesting
