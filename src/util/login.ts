
interface Login {
    mobile: string
    password:string
}

export interface LoginType {
    data: Login[],

}
export interface XHRType {
    errno: number,
    errmsg: string,
    data?: object
}