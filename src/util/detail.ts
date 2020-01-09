
interface Detail {
    id: string,
     name: string,
      list_pic_url: string,
      simple_desc: string,
      pic_url:string,
      sort_order: number,
      is_show: number,
      floor_price: number,
      app_list_pic_url: string,
      is_new: number,
      new_pic_url: string,
      new_sort_order: number
}

export interface DetailType {
 data: Detail[],

}
export interface XHRType {
    errno: number,
    errmsg: string,
    data?: object
}