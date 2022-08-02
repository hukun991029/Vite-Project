<script setup lang="ts">
import { watch, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import IsCollapse from '../SlideContent/IsCollapse.vue';
import Icon from '../../utils/icon';
let router = useRouter();
const route = useRoute();
console.log(router);
console.log(route);

console.log(route.path);
watch(
    () => route.path,
    (newVal, oldVal) => {
        console.log(newVal, oldVal);
    }
);
const state = reactive({
    rootSubmenuKeys: ['system-manage', 'components-manage'],
    openKeys: [''],
    selectedKeys: [],
    preOpenKeys: ['index']
});
watch(
    () => state.openKeys,
    (_val, oldVal) => {
        state.preOpenKeys = oldVal;
    }
);
const onOpenChange = (openKeys: string[]) => {
    console.log(openKeys);
    const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1);
    if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openKeys = openKeys;
    } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
    }
};
const handleClick = (e) => {
    router.push(e.key);
};
// 控制菜单折叠和展开
let isCollapse = ref<boolean>(false);
watch(
    () => isCollapse,
    (newVal, oldVal) => {
        state.openKeys = !!newVal ? [] : state.preOpenKeys;
    }
);
</script>

<template>
    <a-layout-sider class="slide" v-model:collapsed="isCollapse" :trigger="null" collapsible>
        <a-menu
            :open-keys="state.openKeys"
            v-model:selectedKeys="state.selectedKeys"
            mode="inline"
            theme="light"
            @openChange="onOpenChange"
            @click="handleClick"
        >
            <a-sub-menu v-for="item in router.options.routes[2].children" :key="item.path">
                <template #icon>
                    <Icon :name="item.meta.icon"></Icon>
                </template>
                <template #title>{{ item.meta.title }}</template>
                <a-menu-item v-for="ele in item.children" :key="ele.path">
                    <template #icon>
                        <Icon :name="ele.meta.icon"></Icon>
                    </template>
                    <span> {{ ele.meta.title }}</span>
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
        <IsCollapse v-model:isCollapse="isCollapse" />
    </a-layout-sider>
</template>
<style lang="scss" scoped>
.slide {
    height: calc(100vh - 64px);
    background-color: #fff;
    ::v-deep(.ant-layout-sider-trigger) {
        background-color: #fff;
    }
}
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}
.collapse-wrap {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    bottom: 0;
    cursor: pointer;
}
</style>
