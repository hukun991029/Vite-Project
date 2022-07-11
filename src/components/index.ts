import { appendFile } from 'fs';
import { App } from 'vue';
import ChooseArea from './ChooseArea';
import IconSelected from './IconSelected';

const componentsList = [ChooseArea, IconSelected];
const UI = {
    install(app: App) {
        componentsList.forEach((item) => {
            app.use(item);
        });
    }
};
export default UI;
