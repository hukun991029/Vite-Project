import axios from 'axios';
import config from '../config/index';
import { message } from 'ant-design-vue';
const CODE = {
    PARAMS_ERROR: '请求参数错误', // 参数错误
    USER_VALID_ERROR: '账号或密码错误', // 用户账号或密码错误
    USER_LOGIN_ERROR: 'token校验失败', // 用户未登录
    REQUEST_ERROR: '网络错误', // 请求错误
    OTHER_ERROR: '其他错误' // 其他错误
};
const instance = axios.create({
    baseURL: config.baseURL,
    timeout: 5000
});
instance.interceptors.request.use((req) => {
    if (req.headers && !req.headers.Authorization) {
        req.headers.Authorization = localStorage.getItem('token') || '';
    }
    return req;
});
instance.interceptors.response.use((res) => {
    const { data, msg, code } = res.data;
    switch (code) {
        case 200:
            return data;
        case 10001:
            message.error(msg || CODE.PARAMS_ERROR);
            return Promise.reject(msg || CODE.PARAMS_ERROR);
        case 30001:
            message.error(msg || CODE.USER_LOGIN_ERROR);
            return Promise.reject(msg || CODE.USER_LOGIN_ERROR);
    }
});

function request(options) {
    options.method = options.method || 'get';
    if (options.method.toLocaleLowerCase === 'post') {
        options.data = options.params;
    }
    let mockFlag = false;
    if (typeof options.mock !== 'undefined') {
        mockFlag = options.mock;
    }
    if (config.ENV === 'production') {
        instance.defaults.baseURL = config.baseURL;
    } else {
        instance.defaults.baseURL = config.mock || mockFlag ? config.mockUrl : config.baseUrl;
    }
    return instance(options);
}
export default request;
