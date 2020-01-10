export interface RightList {
    id: number,
    name: string,
    wap_banner_url: string,
    front_name: string
}
export interface InteresrList {
    id: number,
    name: string,
    wap_banner_url: string,
    front_name: string,
    currentCategory: any
}

export interface ShangpinList {
    count: number,
    totalPages: number,
    pageSize: number,
    currentPage: number,
    id: number,
    name: string,
    list_pic_url: string,
    retail_price: number,
    checked: boolean,
}

export interface CollectionList {
    add_time: number,
    goods_brief: string,
    id: number,
    is_attention: number,
    list_pic_url: string,
    name: string,
    retail_price: number,
    type_id: number,
    user_id: number,
    value_id: number,
}