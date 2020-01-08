import React from 'react'
import style from "../../scss/navSearch.module.scss"

interface Props {
    
}

const navSearch: React.FC<any> = (props) => {
    let returnClickFn=()=>{
       props.history.goBack()
    }
    return (
        <div className={style.navSearch}>
            <div className={style.header}>
                <span onClick={()=>returnClickFn()}>&lt;</span>
                <input type="text" placeholder="520元礼包抢先领"/>
                <p>取消</p>
                <img src="" alt=""/>
            </div>
            <div className={style.historyBox}>
                <div className={style.record}>
                    <p>历史记录</p><span>删除</span>
                </div>
                <ul>
                    <li>母情节</li>
                    <li>母情节</li>
                    <li>母情节</li>
                    <li>母情节</li>
                    <li>母情节</li>
                </ul>
            </div>
            <div className={style.hot}>
                <div className={style.title}>热门搜索</div>
                <div className={style.hotBox}>
                    <button>520元礼包抢先领</button>
                    <button>母情节</button>
                    <button>母情节</button>
                    <button>母情节</button>
                    <button>母情节</button>
                </div>
            </div>
        </div>
    )
}

export default navSearch
