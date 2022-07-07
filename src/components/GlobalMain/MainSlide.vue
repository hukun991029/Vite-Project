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
    rootSubmenuKeys: ['1', '2', '3', '4', '5'],
    openKeys: ['home'],
    selectedKeys: [route.path],
    preOpenKeys: ['home']
});
watch(
    () => state.openKeys,
    (_val, oldVal) => {
        state.preOpenKeys = oldVal;
    }
);
const onOpenChange = (openKeys: string[]) => {
    const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1);
    if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openKeys = openKeys;
    } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
    }
};
const handleClick = (e) => {
    console.log('e.key', e.key);
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
            v-model:openKeys="state.openKeys"
            v-model:selectedKeys="state.selectedKeys"
            mode="inline"
            theme="light"
            @openChange="onOpenChange"
            @click="handleClick"
        >
            <a-menu-item v-for="item in router.options.routes[0].children" :key="item.path">
                <template #icon>
                    <Icon :name="item.meta.icon"></Icon>
                </template>
                <span> {{ item.meta.title }}</span>
            </a-menu-item>
        </a-menu>
        <IsCollapse v-model:isCollapse="isCollapse" />
    </a-layout-sider>
</template>
<style lang="scss" scoped>
.slide {
    height: calc(100vh - 64px);
    background-color: #fff;
    :deep(.ant-layout-sider-trigger) {
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
