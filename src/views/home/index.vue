<script lang="ts" setup>
import MainHeader from '@/components/GlobalMain/MainHeader.vue';
import MainContent from '@/components/GlobalMain/MainContent.vue';
import MainSlide from '@/components/GlobalMain/MainSlide.vue';
</script>
<template>
    <a-layout>
        <MainHeader></MainHeader>
    </a-layout>
    <a-layout>
        <MainSlide></MainSlide>
        <MainContent></MainContent>
    </a-layout>
</template>
<style lang="scss" scoped></style>
