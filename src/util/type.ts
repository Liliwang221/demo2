  
interface BannerType{
    id: string
    ad_position_id: number
    media_type: number
    name: string
    link: string
    image_url: string
    content: string
    end_time: number
    enabled: number
}
interface ChannelType{
    id: string
    name: string
    url: string
    icon_url: string
    sort_order: number
}
interface NewGoodsList{
    id: string
    name: string
    list_pic_url: string
    retail_price: number
}
interface HotGoodsList{
    id: string
    name: string
    list_pic_url: string
    retail_price: number
    goods_brief: string
}
interface BrandList{
    brandid: string;
    id: string
    name: string
    list_pic_url: string
    simple_desc: string
    pic_url: string
    sort_order: number
    is_show: number
    floor_price: number
    app_list_pic_url: string
    is_new: number
    new_pic_url: string
    new_sort_order: number
}
interface TopicList{
    id: string
    title: string
    content: string
    avatar: string
    item_pic_url: string
    subtitle: string
    topic_category_id: number
    price_info: number
    read_count: string
    scene_pic_url: string
    topic_template_id: number
    topic_tag_id: number
    sort_order: number
    is_show: number
}
interface CategoryList{
    id: string
    name: string,
    goodsList: NewGoodsList[]
}
export interface HomeType{
    banner: BannerType[],
    channel: ChannelType[],
    newGoodsList: NewGoodsList[],
    hotGoodsList: HotGoodsList[],
    brandList: BrandList[],
    topicList: TopicList[],
    categoryList: CategoryList[]
}
export interface XHRType{
    errno: number,
    errmsg: string,
    data?: object
}