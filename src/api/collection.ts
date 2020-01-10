import request from "../util/request";
export let getCollectionList=(params:object)=>{
    return request.get('/collect/list',{params})
}