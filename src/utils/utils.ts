import { message } from 'ant-design-vue';
export const toLine = (value: string): string => {
    return value
        .split('')
        .map((item, index) => {
            if (index > 0) {
                if (value.charCodeAt(index) < 97) {
                    item = '-' + item;
                }
            }
            return item;
        })
        .join('')
        .toLocaleLowerCase();
};

export const copy = (value: string): void => {
    let input = document.createElement('input');
    input.value = value;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    message.success('复制成功');
};
