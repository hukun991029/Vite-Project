import request from '../utils/axios';
const $api = {
    login(params) {
        return request({
            url: '/user/login',
            method: 'POST',
            data: params
        });
    }
};
export default $api;
