import { App } from 'vue';
import InfinityMenu from './index.vue';
export default {
    install(app: App) {
        app.component('InfinityMenu', InfinityMenu);
    }
};
