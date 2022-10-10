<script lang="ts" setup name="Progress">
import { onMounted, ref } from 'vue';
interface ProgressOptions {
    // 进度
    percent: number;
    // 是否动画效果
    isAnimation?: boolean;
    // 动画时间
    animationTime?: number;
}
const props = withDefaults(defineProps<ProgressOptions>(), {
    percent: 0,
    isAnimation: false,
    animationTime: 3000
});
let percentNum = ref(0);
onMounted(() => {
    if (props.isAnimation) {
        let time = Math.ceil(props.animationTime / props.percent);
        let timer = setInterval(() => {
            if (percentNum.value >= props.percent) {
                percentNum.value = props.percent;
                clearInterval(timer);
            } else {
                percentNum.value += 1;
            }
        }, time);
    } else {
        percentNum.value = props.percent;
    }
});
</script>
<template>
    <a-progress :percent="percentNum" v-bind="$attrs" :isAnimation="isAnimation" />
</template>
<style lang="scss" scoped></style>
