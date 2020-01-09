import React,{useEffect} from 'react'
import style from "../../scss/interest.module.scss"
import useStore from '../../util/useStore'
import { useObserver } from "mobx-react-lite"

interface Props {
    
}

const Interesting: React.FC<any> = (props) => {
    let store = useStore();
    let { interesting } = store
    useEffect(() => {
        let id=props.history.location.params.id
        console.log(id)
        interesting.getInterestData()
    }, [])

    return useObserver(() => (
        <div className={style.interesting}>
            <div className={style.header}>
                <span>&lt;</span>
                <p>奇趣分类</p>
            </div>
            <div className={style.nav}>
                <p>asdcfdszfd</p>
                <p>asdcfdszfd</p>
                <p>asdcfdszfd</p>
                <p>asdcfdszfd</p>
                <p>asdcfdszfd</p>
                <p>asdcfdszfd</p>
                <p>asdcfdszfd</p>
            </div>
        </div>
    ))
}

export default Interesting
