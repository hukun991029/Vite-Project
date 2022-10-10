export interface FormOptions {
    type:
        | 'auto-complete'
        | 'cascader'
        | 'checkbox'
        | 'checkbox-group'
        | 'date-picker'
        | 'input'
        | 'input-password'
        | 'textarea'
        | 'input-number'
        | 'mentions'
        | 'radio'
        | 'radio-group'
        | 'radio-button'
        | 'rate'
        | 'select'
        | 'slider'
        | 'switch'
        | 'time-picker'
        | 'time-range-picker'
        | 'transfer'
        | 'tree-select'
        | 'upload';
    placeholder?: string;
    label?: string;
    rules: Array<string>;
    prop: string;
    attrs?: {};
}
