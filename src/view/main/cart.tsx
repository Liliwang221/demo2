import React, { useEffect } from 'react'
import style from "../../scss/cart.module.scss"
import useStore from '../../util/useStore'
import {useObserver} from "mobx-react-lite"

const Cart: React.FC = () => {
    
    let store = useStore();
    let { cart } = store
    useEffect(() => {
        cart.getCartData()
    },[])

    let flag: boolean 
    let allElection = () => {
        if (!flag) {
            flag = true
        } else {
            flag = false
        }
        console.log(flag===false)
    }

    return useObserver(()=>(
        <div className={style.cart}>
            <header>
                <ul>
                    <li><span>★</span>30天无忧退货</li>
                    <li><span>★</span>48小时快速退款</li>
                    <li><span>★</span>满88元免邮费</li>
                </ul>
            </header>
            <main>

            </main>
            <footer className={style.footer}>
                <div className={style.chooice} onClick={() => allElection()}><img src=""/></div>
                <div className={style.txt}>已选(10) ￥2240</div>
                <div className={style.edit}> 编辑</div>
                <div className={style.del}>删除</div>
            </footer>
        </div>
    ))
}
export default Cart
