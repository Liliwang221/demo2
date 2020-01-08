import React from "react"
import { ClassifyList } from "../types/classify"
// import { RightList } from '../types/rightType';
import { observable, action, computed } from "mobx"
import { getListData, getRightData } from "../../api/classifyApi"


export default class Classify {
    @observable //分类左侧数据
    list: ClassifyList[] = []
    @observable //分类左侧点击
    indexInfo: number = 0
    @observable  //分类右侧数据
    // RightList:RightList[]=[]
    RightList: any = {
        wap_banner_url: "http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png",
        name: "居家",
        front_name: "回家，放松身心",
        subCategoryList:[
            {
                banner_url: "http://yanxuan.nosdn.127.net/8bbcd7de60a678846664af998f57e71c.png",
                front_desc: "换个软装，换个家",
                front_name: "各种风格软装装点你的家",
                icon_url: "",
                id: 1008002,
                img_url: "",
                is_show: 1,
                keywords: "",
                level: "L2",
                name: "布艺软装",
                parent_id: 1005000,
                show_index: 4,
                sort_order: 6,
                type: 0,
                wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png"
            },{
                banner_url: "http://yanxuan.nosdn.127.net/927bc33f7ae2895dd6c11cf91f5e3228.png",
                front_desc: "选用优质材料，确保好芯",
                front_name: "守护你的睡眠时光",
                icon_url: "",
                id: 1008008,
                img_url: "",
                is_show: 1,
                keywords: "",
                level: "L2",
                name: "被枕",
                parent_id: 1005000,
                show_index: 2,
                sort_order: 2,
                type: 0,
                wap_banner_url: "http://yanxuan.nosdn.127.net/b43ef7cececebe6292d2f7f590522e05.png"
            },{
                banner_url: "http://yanxuan.nosdn.127.net/243e5bf327a87217ad1f54592f0176ec.png",
                front_desc: "严格用料，亲肤舒适",
                front_name: "MUJI等品牌制造商出品",
                icon_url: "",
                id: 1008009,
                img_url: "",
                is_show: 1,
                keywords: "",
                level: "L2",
                name: "床品件套",
                parent_id: 1005000,
                show_index: 3,
                sort_order: 4,
                type: 0,
                wap_banner_url: "http://yanxuan.nosdn.127.net/81f671bd36bce05d5f57827e5c88dd1b.png"
            },{
                banner_url: "http://yanxuan.nosdn.127.net/c48e0d9dcfac01499a437774a915842b.png",
                front_desc: "极简主义，贴近生活的设计",
                front_name: "一盏灯，温暖一个家",
                icon_url: "",
                id: 1008016,
                img_url: "",
                is_show: 1,
                keywords: "",
                level: "L2",
                name: "灯具",
                parent_id: 1005000,
                show_index: 6,
                sort_order: 8,
                type: 0,
                wap_banner_url: "http://yanxuan.nosdn.127.net/f702dc399d14d4e1509d5ed6e57acd19.png" 
            },{
                banner_url: "http://yanxuan.nosdn.127.net/83d4c87f28c993af1aa8d3e4d30a2fa2.png",
                front_desc: "手工编织，时尚环保",
                front_name: "家里的第“五”面墙",
                icon_url: "",
                id: 1010003,
                img_url: "",
                is_show: 1,
                keywords: "",
                level: "L2",
                name: "地垫",
                parent_id: 1005000,
                show_index: 4,
                sort_order: 5,
                type: 0,
                wap_banner_url: "http://yanxuan.nosdn.127.net/1611ef6458e244d1909218becfe87c4d.png"
            },{
                banner_url: "http://yanxuan.nosdn.127.net/316afeb3948b295dfe073e4c51f77a42.png",
                front_desc: "助你拥有舒眠好梦",
                front_name: "承托你的好时光",
                icon_url: "",
                id: 1011003,
                img_url: "",
                is_show: 1,
                keywords: "",
                level: "L2",
                name: "床垫",
                parent_id: 1005000,
                show_index: 3,
                sort_order: 3,
                type: 0,
                wap_banner_url: "http://yanxuan.nosdn.127.net/d6e0e84961032fc70fd52a8d4d0fb514.png"
            },{
                banner_url: "http://yanxuan.nosdn.127.net/ab0df9445d985bf6719ac415313a8e88.png",
                front_desc: "点缀美好生活，品质在于细节",
                front_name: "装饰你的家",
                icon_url: "",
                id: 1011004,
                img_url: "",
                is_show: 1,
                keywords: "",
                level: "L2",
                name: "家饰",
                parent_id: 1005000,
                show_index: 7,
                sort_order: 9,
                type: 0,
                wap_banner_url: "http://yanxuan.nosdn.127.net/79275db76b5865e6167b0fbd141f2d7e.png"
            },{
                banner_url: "http://yanxuan.nosdn.127.net/4f00675caefd0d4177892ad18bfc2df6.png",
                front_desc: "一级原木，严苛工艺",
                front_name: "大师级工艺",
                icon_url: "",
                id: 1015000,
                img_url: "",
                is_show: 1,
                keywords: "",
                level: "L2",
                name: "家具",
                parent_id: 1005000,
                show_index: 5,
                sort_order: 7,
                type: 0,
                wap_banner_url: "http://yanxuan.nosdn.127.net/d5d41841136182bf49c1f99f5c452dd6.png"
            },{
                banner_url: "http://yanxuan.nosdn.127.net/a0352c57c60ce4f68370ecdab6a30857.png",
                front_desc: "出口品质，严选贴合萌宠生活习惯用品。",
                front_name: "抑菌除味，打造宠物舒适空间",
                icon_url: "",
                id: 1017000,
                img_url: "",
                is_show: 1,
                keywords: "",
                level: "L2",
                name: "宠物",
                parent_id: 1005000,
                show_index: 8,
                sort_order: 10,
                type: 0,
                wap_banner_url: "http://yanxuan.nosdn.127.net/dae4d6e89ab8a0cd3e8da026e4660137.png"
            },{
                banner_url: "http://yanxuan.nosdn.127.net/13ff4decdf38fe1a5bde34f0e0cc635a.png",
                front_desc: "夏凉床品，舒适一夏",
                front_name: "夏凉床品，舒适一夏",
                icon_url: "",
                id: 1036000,
                img_url: "",
                is_show: 1,
                keywords: "",
                level: "L2",
                name: "夏凉",
                parent_id: 1005000,
                show_index: 1,
                sort_order: 1,
                type: 0,
                wap_banner_url: "http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png"
            }
        ],
        
    }


    @action //分类左侧点击
    async getListData() {
        const res: any = await getListData()
        this.list = res.data.categoryList
    }

    @action //分类右侧数据
    async getRightData(id: string) {
        const res = await getRightData(id)
        this.RightList = res.data.currentCategory
    }
}