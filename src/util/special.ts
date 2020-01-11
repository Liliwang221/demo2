
interface Type {
    id: string,
    price_info: number
    scene_pic_url: string
    subtitle: string
    title: string
}

export interface SpecialType {
    data: Type[],

}
export interface XHRType {
    errno: number,
    errmsg: string,
    data?: object
}