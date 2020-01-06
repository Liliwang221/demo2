import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://169.254.156.252',
    timeout: 1000,

});

//请求拦截器
axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});
//响应拦截器
// Add a response interceptor
axios.interceptors.response.use(function(response) {
    // Do something with response data
    // return response;
    if (response.status == 200) {
        return response.status
    } else {
        alert('状态吗错误')
    }
}, function(error) {
    // Do something with response error
    return Promise.reject(error);
});
export default instance;