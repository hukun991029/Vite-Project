import { appendFile } from 'fs';
import { App } from 'vue';
import ChooseArea from './ChooseArea';
import IconSelected from './IconSelected';
import TrendMarker from './TrendMarker';
import NotificationMenu from './NotificationMenu';
import Menu from './Menu';
import InfinityMenu from './InfinityMenu';
import Progress from './Progress';
import TimeSelected from './TimeSelected';
import ChooseCity from './chooseCity';
import FormMenu from './Form';
const componentsList = [
    ChooseArea,
    IconSelected,
    TrendMarker,
    NotificationMenu,
    Menu,
    InfinityMenu,
    Progress,
    TimeSelected,
    ChooseCity,
    FormMenu
];
const UI = {
    install(app: App) {
        componentsList.forEach((item) => {
            app.use(item);
        });
    }
};
export default UI;
