<script lang="ts" setup>
import { reactive } from 'vue';
import { MenuType } from '@/components/Menu/menuType';

const menuList = reactive<MenuType[]>([
    {
        title: '导航1',
        key: '1',
        icon: 'Document'
    },
    {
        title: '导航2',
        key: '2',
        icon: 'Document'
    },
    {
        title: '导航3',
        key: '3',
        icon: 'Document',
        children: [
            {
                title: '导航3-1',
                key: '3-1',
                icon: 'Document'
            }
        ]
    }
]);
</script>
<template>
    <Menu :menuList="menuList"></Menu>
    <InfinityMenu></InfinityMenu>
</template>
<style lang="scss" scoped></style>
