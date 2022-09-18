<script lang="ts" setup>
import { toLine } from '@/utils/utils';
interface Options {
    icon?: string;
    count?: number;
    dot?: boolean;
    overflowCount?: number;
    showZero?: boolean;
}
const props = withDefaults(defineProps<Options>(), {
    icon: 'BellOutlined',
    count: 1,
    dot: true,
    overflowCount: 99,
    showZero: false
});
</script>
<template>
    <a-popover placement="bottom" trigger="click">
        <template #content>
            <slot></slot>
        </template>
        <a>
            <a-badge :count="props.count" v-bind="$attrs">
                <component :is="`a-icon-${toLine(icon)}`"></component>
            </a-badge>
        </a>
    </a-popover>
</template>
<style lang="scss" scoped>
svg {
    width: 30px !important;
    height: 30px !important;
}
</style>
