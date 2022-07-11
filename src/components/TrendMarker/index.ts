import TrendMarker from './index.vue';
import { App } from 'vue';
export default {
    install(app: App) {
        app.component('TrendMarker', TrendMarker);
    }
};
