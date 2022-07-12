<script lang="ts" setup>
import { computed, useSlots } from 'vue';
let slots = useSlots();
let props = withDefaults(
    defineProps<{
        type?: 'up' | 'down';
        text?: string;
        upIconColor?: string;
        downIconColor?: string;
        reverseColor?: boolean;
        upTextColor?: string;
        downTextColor?: string;
        upIcon: string;
        downIcon: string;
    }>(),
    {
        type: 'up',
        text: '营业额',
        upIconColor: 'red',
        downIconColor: 'green',
        reverseColor: false,
        upTextColor: 'red',
        downTextColor: 'green',
        upIcon: 'icon-up',
        downIcon: 'icon-down'
    }
);
const textColor = computed(() => {
    return props.type === 'up' ? props.upTextColor : props.downTextColor;
});
</script>
<template>
    <div class="trend-wrap">
        <slot v-if="slots.default"></slot>
        <div v-else :style="{ color: textColor }">{{ text }}</div>
        <div>
            <i
                v-if="type === 'up'"
                :class="['iconfont', upIcon]"
                :style="{ color: reverseColor ? downIconColor : upIconColor }"
            ></i>
            <i
                v-else
                :class="['iconfont', downIcon]"
                :style="{ color: reverseColor ? upIconColor : downIconColor }"
            ></i>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.trend-wrap {
    display: flex;
    align-items: center;
    margin-right: 20px;
}
</style>
