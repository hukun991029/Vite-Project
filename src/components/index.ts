import { appendFile } from 'fs';
import { App } from 'vue';
import ChooseArea from './ChooseArea';
import IconSelected from './IconSelected';
import TrendMarker from './TrendMarker';
import NotificationMenu from './NotificationMenu';
import Menu from './Menu';
const componentsList = [ChooseArea, IconSelected, TrendMarker, NotificationMenu, Menu];
const UI = {
    install(app: App) {
        componentsList.forEach((item) => {
            app.use(item);
        });
    }
};
export default UI;
