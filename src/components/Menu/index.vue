<script lang="ts" setup>
import { ref, watch, PropType } from 'vue';
import type { MenuType } from './menuType';
import type { MenuProps } from 'ant-design-vue';
import { toLine } from '@/utils/utils';
const props = defineProps({
    menuList: {
        type: Array as PropType<MenuType[]>
    }
});
// const props=withDefaults(defineProps<PropType<MenuType[]>>(),{})
const selectedKeys = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
const handleClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
};
const titleClick = (e: Event) => {
    console.log('titleClick', e);
};
watch(
    () => openKeys,
    (val) => {
        console.log('openKeys', val);
    }
);
</script>
<template>
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 256px"
        mode="inline"
        @click="handleClick"
        v-bind="$attrs"
    >
        <template v-for="item in menuList">
            <a-sub-menu
                :key="item.key"
                v-if="item.children && item.children.length"
                @titleClick="titleClick"
            >
                <template #title>{{ item.title }}</template>
                <template v-for="ele in item.children" :key="ele.key">
                    <a-menu-item>
                        <template #icon>
                            <component :is="`a-icon-${toLine(ele.icon!)}`"></component>
                        </template>
                        {{ ele.title }}
                    </a-menu-item>
                </template>
            </a-sub-menu>
            <a-menu-item :key="item.key" v-else>
                <template #icon>
                    <component :is="`a-icon-${toLine(item.icon!)}`"></component>
                </template>
                {{ item.title }}
            </a-menu-item>
        </template>
    </a-menu>
</template>
<style lang="scss" scoped></style>
