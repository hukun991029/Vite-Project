/*
 * @Author: your name
 * @Date: 2022-04-07 09:15:53
 * @LastEditTime: 2022-07-11 13:42:19
 * @LastEditors: Do not edit
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \big-screen-zgyhd:\vite-project\src\main.ts
 */
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router/index';
import './assets/css/global.css';
import './assets/iconfont/iconfont.css';
import * as Icons from '@ant-design/icons-vue';
import UI from './components';
const app = createApp(App);
import { toLine } from './utils/utils';
for (let i in Icons) {
    app.component(`a-icon-${toLine(i)}`, Icons[i] as any);
}
app.use(router).use(Antd).use(createPinia()).use(UI);
app.mount('#app');
