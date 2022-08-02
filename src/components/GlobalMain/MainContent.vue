<script lang="ts" setup>
import FooterContent from '../FooterContent/FooterContent.vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
console.log(route);
</script>
<template>
    <a-layout class="content-wrap">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item v-for="item in route.matched">{{
                item.meta.title
            }}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
            <span v-if="route.path === '/index'">Welcome</span>
            <router-view v-else></router-view>
        </a-layout-content>
        <!-- <FooterContent /> -->
    </a-layout>
</template>
<style lang="scss" scoped>
.content-wrap {
    padding: 0 24px 24px;
    overflow: auto;
    height: calc(100vh - 64px);
}
</style>
