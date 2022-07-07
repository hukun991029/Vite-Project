<script lang="ts" setup>
import IconSelected from '@/components/IconSelected/index.vue';
import { ref } from 'vue';
let title = ref<string>('选择图标');
let dialogVisible = ref<boolean>(false);
</script>
<template>
    <IconSelected v-model:title="title" v-model:dialogVisible="dialogVisible">
        <template #text> 图标选择 </template>
    </IconSelected>
</template>
<style lang="scss" scoped></style>
