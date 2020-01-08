import React,{useEffect} from 'react'
import style from "../../scss/cart.module.scss"
import useStore from '../../util/useStore'
const Cart: React.FC = () => {
    let flag:boolean=false;
   let store=useStore()
//    let {cart}=store
   useEffect(()=>{
    //    store.cart.getCartData()
   })
    let allElection=()=>{
        if(!flag){
            flag=true
        }else{
            flag=false 
        }
        console.log(flag)
    }

    return (
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
            <footer>
                <div className={`${flag===false?style.chooice:style.active}`} onClick={()=>allElection()}></div>
                <div className={style.txt}>已选(10) ￥2240</div>
                <div className={style.edit}> 编辑</div>
                <div className={style.del}>删除</div>
            </footer>
        </div>
    )
}
export default Cart
