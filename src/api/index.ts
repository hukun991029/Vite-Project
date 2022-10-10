/*
 * @Author: hukun 1228836483@qq.com
 * @Date: 2022-07-31 01:04:38
 * @LastEditors: hukun 1228836483@qq.com
 * @LastEditTime: 2022-08-03 19:54:37
 * @FilePath: /code/Vite-Project/src/api/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../utils/axios';
const $api = {
    login(params) {
        return request({
            url: '/user/login',
            method: 'POST',
            data: params
        });
    },
    getList(params) {
        return request({
            url: '/user/getList',
            method: 'GET',
            data: params
        });
    }
};
export default $api;
