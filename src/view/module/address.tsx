import React from 'react'
import useStore from '../../util/useStore'
import { useObserver } from "mobx-react-lite"


const Address:React.FC=()=>{
    return useObserver(()=>(
    <div>
         地址
    </div>
    ))
     
}
export default Address;



// import React from 'react'
// import useStore from '../../util/useStore'
// import { useObserver } from "mobx-react-lite"


// const Collection:React.FC=()=>{
//     return useObserver(()=>(
//     <div>
//          收藏
//     </div>
//     ))
     
// }
// export default Collection;