import { App } from 'vue';
import TimeSelected from './index.vue';
export default {
    install(app: App) {
        app.component('TimeSelected', TimeSelected);
    }
};
