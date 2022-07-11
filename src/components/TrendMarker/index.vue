<script lang="ts" setup>
let props = withDefaults(defineProps<{ type?: 'up' | 'down'; text?: string }>(), {
    type: 'up',
    text: ''
});
</script>
<template>
    <div class="trend-wrap">
        <div>
            <i v-if="props.type === 'up'" class="iconfont icon-up"></i>
            <i v-else class="iconfont icon-down"></i>
        </div>
        <div></div>
    </div>
</template>
<style lang="scss" scoped></style>
