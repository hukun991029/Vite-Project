import ChooseArea from './ChooseArea.vue';
import { App } from 'vue';
export default {
    install(app: App) {
        app.component('ChooseArea', ChooseArea);
    }
};
