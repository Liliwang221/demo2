import React from 'react'
// import {homeList} from './type/homeify'
import {observable,action,computed} from 'mobx'
import {getHomeData} from '../api/home'
import {HomeType} from '../util/type'

export default class HomeStore{
    @observable
    data: HomeType = {
        banner: [],
        channel: [],
        newGoodsList: [],
        hotGoodsList: [],
        brandList: [],
        topicList: [],
        categoryList: []
    }

    @action
    async getHomeData() {
        let res = await getHomeData();
        this.data = res.data;
    }
}