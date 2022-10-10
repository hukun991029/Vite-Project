export interface ListItem {
    // 头像
    avatar?: string;
    // 标题
    title: string;
    // 描述
    desc?: string;
    // 时间
    time?: string;
    tag?: string;
    // 标签类型
    tagType?: 'success' | 'processing' | 'error' | 'warning' | 'default';
}
export interface ListOptions {
    title: string;
    content: Array<ListItem>;
}
export interface ActionOptions {
    icon?: string;
    text : string;
}
