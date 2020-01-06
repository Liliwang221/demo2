import React from 'react'
 import "../../scss/classify.scss"
const Classify:React.FC=()=>{
    return<div className="classify">
        <div className="search">
            <input type="text" placeholder="搜索商品，共239款好物"/>
        </div>
        <div className="wrapper">
            <div className="leftWrap">
                <ul>
                    <li>家具</li>
                    <li>家具</li>
                    <li>家具</li>
                    <li>家具</li>
                </ul>
            </div>
            <div className="rightWrap">
                <div className="imgWrap"></div>
                <div className="titleWrap">--居家分类--</div>
                <div className="shangpinImg"></div>
            </div>
        </div>
    </div>
}
export default Classify;