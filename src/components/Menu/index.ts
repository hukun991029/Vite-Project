import { App } from 'vue';
import Menu from './index.vue';
export default {
    install(app: App) {
        app.component('Menu', Menu);
    }
};
