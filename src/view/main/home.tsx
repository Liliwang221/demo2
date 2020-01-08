import React, { useEffect } from 'react'
import styleHome from '../main/home.module.scss'
// import useState from '../../util/useStore'
import { useObserver } from "mobx-react-lite"
import useStore from '../../util/useStore'
let Home: React.FC = () => {
    let store = useStore();
    let { Home } = store
    useEffect(() => {
        Home.getHomeData()
    }, [Home])
    return useObserver(() => (
        <div className={styleHome.home}>
            {/* 轮播图系列 */}
            <div className={styleHome.img}>
                <img src="http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg" alt="" />
            </div>
            {/* 雪碧图系列 */}
            <div className={styleHome.contain}>
                <div className={styleHome.first}>
                    {
                        Home.homeList.map((item, index) => {
                            return <div className={styleHome.picture} key={index}>
                                <p className={styleHome.pictureRoot}>  <img src={item.icon_url} alt="" /></p>
                                <p className={styleHome.pictureName}>{item.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            {/* 品牌系列 */}
            <div className={styleHome.second}>
                <p className={styleHome.secondName}>品牌制造供应商</p>
                <div className={styleHome.secondPicture}>
                    {
                        Home.brandList.map((item, index) => {
                            return <div className={styleHome.secondPictureRoot} key={index}>
                                <img src={item.new_pic_url} alt="" />
                                <div className={styleHome.secondList}>
                                    <p>{item.name}</p>
                                    <p>{item.floor_price}元起</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        {/* 新品系列 */}
            <div className={styleHome.newGoodBox}>
                <p className={styleHome.newGoodTitle}>新品首发</p>
                <div className={styleHome.newGoodWrap}>
                    {
                        Home.newGoodList.map((item, index) => {
                            return <div className={styleHome.newGoodItem} key={index}>
                                <img src={item.list_pic_url} alt="" />
                                <div className={styleHome.newGoodList}>
                                    <p className={styleHome.newGoodName}>{item.name}</p>
                                    <p className={styleHome.newGoodPrice}>￥{item.retail_price}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            {/* 人气推荐系列 */}
            <div className={styleHome.hotGoodBox}>
                <p className={styleHome.hotGoodTitle}>人气推荐</p>
                <div className={styleHome.hotGoodWrap}>
                    {
                        Home.hotGoodList.map((item, index) => {
                            return <div className={styleHome.hotGoodItem} key={index}>
                                <img src={item.list_pic_url} alt="" />
                                <div className={styleHome.hotGoodList}>
                                    <p>{item.name}</p>
                                    <p>{item.goods_brief}</p>
                                    <p>￥{item.retail_price}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            {/* 滑块部分 */}
            <div className={styleHome.topGoodBox}>
                <p className={styleHome.topGoodTitle}>专题精选</p>
                <div className={styleHome.topGoodWrap}>
                    {
                        Home.topGoodList.map((item, index) => {
                            return <div className={styleHome.topGoodItem} key={index}>
                                <img src={item.item_pic_url} alt="" />
                                <div className={styleHome.topGoodList}>
                                    <p><span className={styleHome.topGoodName}>{item.title}</span><span className={styleHome.topGoodPrice}>￥{item.price_info}元起</span></p>
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            {/* 居家 */}
            <div className={styleHome.cateGoodBox}>
                {/* <p className={styleHome.cateGoodTitle}>专题精选</p> */}
                <div className={styleHome.cateGoodWrap}>
                    {
                        Home.cateGoryList.map((item, index) => {
                            return <div className={styleHome.cateGoodItem} key={index}>
                                <p className={styleHome.cateGoodTitle}>{item.name}</p>
                                <div className={styleHome.cateItemList}>
                                    {
                                        item.goodsList.map((item1: any, index1: any) => {
                                            return <div key={index1} className={styleHome.cateGoodListItem}>

                                                <p className={styleHome.cateGoodImg}><img src={item1.list_pic_url} alt="" /></p>
                                                <p>{item1.name}</p>

                                            </div>
                                        })
                                    }
                                    <div className={styleHome.cateLast}>
                                    <p>更多居家好物</p>
                                    <p> 
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt=""/>
                                    </p>
                                </div>
                                </div>
                                
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    ))

}
export default Home;