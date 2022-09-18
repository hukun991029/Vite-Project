export interface MenuType {
    // 菜单图标
    icon?: string;
    // 菜单标题
    title: string;
    // 菜单标志
    key: string;
    children?: MenuType[];
}
