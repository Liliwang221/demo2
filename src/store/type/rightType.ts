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
    id: number,
    user_id:number,
    value_id:number,
    add_time:number,
    is_attention: number,
    type_id:number,
    name: string,
    list_pic_url:string,
    goods_brief: string,
    retail_price:number,
}

export interface AddressList{
    address:string,
    city_id: number,
    city_name: string,
    country_id: number,
    district_id: number,
    district_name: string,
    full_region: string,
    id: number,
    is_default: number,
    mobile: string,
    name:string,
    province_id: number,
    province_name:string,
    user_id: number
}
