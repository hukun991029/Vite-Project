<script lang="ts" setup>
import { watch, ref } from 'vue';
const props = withDefaults(defineProps<{ title: string; dialogVisible: boolean }>(), {
    title: '',
    dialogVisible: false
});
const emit = defineEmits<{ (e: 'update:dialogVisible', diaolgVisible: boolean): void }>();
watch(
    () => props.dialogVisible,
    (newVal) => {
        visible.value = newVal;
    }
);
let visible = ref<boolean>(props.dialogVisible);
watch(
    () => visible.value,
    (newVal) => {
        console.log(newVal);
        emit('update:dialogVisible', newVal);
    }
);
// 更改dialogVisible显隐
const showModel = (): void => {
    emit('update:dialogVisible', !props.dialogVisible);
};
const handleOk = (): void => {};
</script>
<template>
    <a-button @click="showModel" type="primary"> <slot name="text"></slot> </a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk"> </a-modal>
</template>
<style lang="scss" scoped></style>
