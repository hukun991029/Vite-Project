<script lang="ts" setup>
import { watch, ref } from 'vue';
import * as Icons from '@ant-design/icons-vue';
import { toLine, copy } from '@/utils/utils.ts';
// 传递自组件的数据
const props = withDefaults(defineProps<{ title: string; dialogVisible: boolean }>(), {
    title: '',
    dialogVisible: false
});
// 更新父组件的值
const emit = defineEmits<{ (e: 'update:dialogVisible', diaolgVisible: boolean): void }>();
watch(
    () => props.dialogVisible,
    (newVal) => {
        visible.value = newVal;
    }
);
// 控制弹出框显示与隐藏
let visible = ref<boolean>(props.dialogVisible);
watch(
    () => visible.value,
    (newVal) => {
        emit('update:dialogVisible', newVal);
    }
);
// 更改dialogVisible显隐
const showModel = (): void => {
    emit('update:dialogVisible', !props.dialogVisible);
};
const copyIcon = (value: string): void => {
    let text = `a-icon-${value}`;
    copy(text);
    visible.value = false;
};
const handleOk = (): void => {};
</script>
<template>
    <a-button @click="showModel" type="primary"> <slot name="text"></slot> </a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk" :width="1200">
        <div class="containar">
            <div
                class="icons-wrap"
                v-for="(item, index) in Object.keys(Icons)"
                :key="index"
                @click="copyIcon(item)"
            >
                <div class="icon-wrap"><component :is="`a-icon-${toLine(item)}`"></component></div>
                <div>{{ item }}</div>
            </div>
        </div>
    </a-modal>
</template>
<style lang="scss" scoped>
.containar {
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow: auto;
}
.icons-wrap {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    cursor: pointer;
    ::v-deep(svg) {
        width: 2em;
        height: 2em;
    }
}
</style>
