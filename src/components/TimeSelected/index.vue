<script></script>
<script lang="ts" setup name="TimeSelected">
interface TimeOptions {
    startTime: number;
    endTime: number;
}
const props = withDefaults(defineProps<TimeOptions>(), {});
</script>
<template>
    <a-space direction="vertical">
        <a-time-picker v-model:value="startTime" />
        <a-time-picker v-model:value="endTime" value-format="HH:mm:ss" />
    </a-space>
</template>
<style lang="scss" scoped></style>
