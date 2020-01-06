import React from 'react'
import {Switch,Redirect,Route} from "react-router-dom"

export default  (props:any)=>{
    return <Switch>
        {
            props.routes.map((item:any,index:number)=>{
                if(item.form==="*"){
                    return <Redirect to={item.to}></Redirect>
                }else if(item.from){
                    return <Redirect exact from={item.from} to={item.to}/>
                }
            })
        }
    </Switch>
}
