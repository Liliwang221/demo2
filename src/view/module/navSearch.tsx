import React from 'react'
import style from "../../scss/navSearch.module.scss"
interface Props {
    
}

const navSearch: React.FC<Props> = () => {
    return (
        <div className={style.navSearch}>
            <div className={style.header}></div>
        </div>
    )
}

export default navSearch
