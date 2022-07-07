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
