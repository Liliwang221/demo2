
interface Login {
    mobile: string
    password:string
}

export interface LoginType {
    data: Login[],
    sessionKey:any
}
export interface XHRType {
    errno: number,
    errmsg: string,
    data?: object
}