// import * as React from 'react';
// import {Switch, Redirect, Route} from 'react-router-dom';

// interface ItemType{
//     path?: string,
//     component?: any,
//     from?: string,
//     to?: any,
//     children?: ItemType[]
// }
// interface PropType {
//     routes: ItemType []
// }
// export default (props: PropType)=>{
//     return <Switch>
//         {
//             props.routes.map((item: ItemType, index)=>{
//                 if (item.from === '*'){
//                     return <Redirect key={index} to={item.to}/>
//                 }else if(item.from){
//                     return <Redirect key={index} exact from={item.from} to={item.to}/>
//                 }

//                 return <Route key={index} path={item.path} render={(props)=>{
//                     if (item.children){
//                         /** 渲染组件，类似于<Tab/>
//                          *  ...props 把路由信息展开传递下去
//                          *  item.children 把子路由配置传递下去
//                          */
//                         return <item.component {...props} routes={item.children}/>
//                     }else{
//                         return <item.component {...props}/>
//                     }
//                 }}></Route>
//             })
//         }
//     </Switch>
// }

import * as React from 'react';
import * as Router from 'react-router-dom';
// 获取范型接口
import { IRouterConfig } from './index.d';

const IRouterView=({routes}:IRouterConfig)=>{
    return <Router.Switch>
       {
          routes.map((item:any,index:number)=>{
            //   判断是路由还是重定向
              if(item.type==='route'){
                //   创建路由组件标签
                  const Com=item.component;
                //   渲染路由
                  return <Router.Route key={index}  path={item.path} render={
                    //   render渲染路由标签
                      (props:Router.RouteProps)=>{
                        //   判断有没有后代路由
                        const readireChildren:IRouterConfig =item.children;
                        if(readireChildren){
                            // 有后代
                            return <Com {...props} routes={readireChildren} ></Com>
                        }else{
                            // 无后代
                            return <Com {...props} ></Com>
                        }
                      }
                  } ></Router.Route>
              }
              if(item.type==='redirect'){
                //  重定向
                return <Router.Redirect key={index} to={item.to} from={item.from} ></Router.Redirect>
              } 
            //   容错
              return null
          })
       }
      
    </Router.Switch>
}

export default IRouterView

