import React from 'react'
import style from "../../scss/my.module.scss"
import useStore from '../../util/useStore'
import { useObserver } from "mobx-react-lite"
import "../../font_z6duoo2hps/iconfont.css"
import "../../icon图标淘宝/font_5rhyeqzz879/iconfont.css"

const My:React.FC<any>=(props)=>{

    let chpucangFn=()=>{
        props.history.push("/collection")
    }

    return useObserver(()=>(
        <div className={style.my}>
            {/* 头像和用户信息 */}
            <div className={style.box}>
                <div className={style.headportrait}>
                    <img src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png"/>
                    <div className={style.info}>
                        <p>15678954236</p>
                        <span>普通用户</span>
                    </div>
                </div>
            </div>
            {/*收藏、地址、、、  */}
            <div className={style.context}>
                <div className={style.txt} onClick={()=>chpucangFn()}>
                    <span className="iconfont">&#xe824;</span>
                    <p>收藏</p>
                </div>
                <div className={style.txt}>
                    <span className="iconfont">&#xe848;</span>
                    <p>地址</p>
                </div>
                <div className={style.txt}>
                    <span className="iconfont">&#xe60e;</span>
                    <p>我的订单</p>
                </div>
                <div className={style.txt}>
                    <span className="iconfont">&#xe60f;</span>
                    <p>周末拼单</p>
                </div>
                <div className={style.txt}>
                    <span className="iconfont">&#xe642;</span>
                    <p>优惠券</p>
                </div>
                <div className={style.txt}>
                    <span className="iconfont">&#xe61d;</span>
                    <p>优选购</p>
                </div>
                <div className={style.txt}>
                    <span className="iconfont">&#xe61c;</span>
                    <p>我的红包</p>
                </div>
                <div className={style.txt}>
                    <span className="iconfont">&#xe625;</span>
                    <p>会员plus</p>
                </div>
                <div className={style.txt}>
                    <span className="iconfont">&#xe641;</span>
                    <p>邀请返利</p>
                </div>
                <div className={style.txt}>
                    <span className="iconfont">&#xe63a;</span>
                    <p>意见反馈</p>
                </div>
                <div className={style.txt}>
                    <span className="iconfont">&#xe62f;</span>
                    <p>客服咨询</p>
                </div>
                <div className={style.txt}>
                    <span className="iconfont">&#xf01f9;</span>
                    <p>账户安全</p>
                </div>
            </div>
        </div>
    ))
    
}
export default My;