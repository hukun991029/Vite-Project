import { appendFile } from 'fs';
import { App } from 'vue';
import ChooseArea from './ChooseArea';
import IconSelected from './IconSelected';
import TrendMarker from './TrendMarker';
const componentsList = [ChooseArea, IconSelected, TrendMarker];
const UI = {
    install(app: App) {
        componentsList.forEach((item) => {
            app.use(item);
        });
    }
};
export default UI;
