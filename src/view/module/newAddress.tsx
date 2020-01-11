
import React from 'react'
import useStore from '../../util/useStore'
import { useObserver } from "mobx-react-lite"
import { Picker, List } from 'antd-mobile';
import style from "../../scss/newAddress.module.scss"
import addressData from "../../util/address"

const NewAddress: React.FC = (props) => {
    let pickerValue:any[]=[]
    console.log(pickerValue)
    // let addressFn=(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    //     console.log(e.target)
    // }
    
    
    return useObserver(() => (
        <div className={style.newAddress}>
            <div className={style.heads}>
                <p>新增地址</p>
            </div>
            <div className={style.main}>
                <div className={style.names}>
                    <input type="text" placeholder="姓名" />
                </div>
                <div className={style.phone}>
                    <input type="text" placeholder="电话号" />
                </div>

                <div className={style.chooiceAddress}>
                    <List style={{ backgroundColor: 'white' }} className="picker-list">
                        <Picker extra="请选择(可选)"
                            data={addressData}
                            title="Areas"
                            onOk={e => pickerValue=e}
                            value={pickerValue}
                        >
                            <List.Item arrow="horizontal">Multiple & cascader</List.Item>
                        </Picker>
                    </List>
                </div>

                <div className={style.address}>
                    <input type="text" placeholder="详细地址" />
                </div>
                <div className={style.setAddress}>
                    <p>设置默认地址</p>
                </div>
            </div>
            <div className={style.foots}>
                <p>取消</p>
                <span>保存</span>
            </div>
        </div>
    ))

}
export default NewAddress;