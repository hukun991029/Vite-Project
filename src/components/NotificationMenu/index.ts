import { App } from 'vue';
import NotificationMenu from './index.vue';
export default {
    install(app: App) {
        app.component('NotificationMenu', NotificationMenu);
    }
};
