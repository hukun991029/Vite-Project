<script lang="ts" setup>
import FooterContent from '../FooterContent/FooterContent.vue';
</script>
<template>
    <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>router1</a-breadcrumb-item>
            <a-breadcrumb-item>router2</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
            <router-view></router-view>
        </a-layout-content>
        <!-- <FooterContent /> -->
    </a-layout>
</template>
<style lang="scss" scoped></style>
