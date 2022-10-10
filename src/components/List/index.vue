<script lang="ts" setup>
import { ref, PropType } from 'vue';
import { ListOptions, ActionOptions } from './listType';
let activeKey = ref(0);
const props = defineProps({
    list: {
        type: Array as PropType<ListOptions[]>,
        required: true
    },
    actions: {
        type: Array as PropType<ActionOptions[]>,
        default: () => []
    }
});
const emits = defineEmits<{
    (e: 'clickItem', item: any, index: number): void;
    (e: 'clickActions', item: any, index: number);
}>();
const clickItem = (item, index) => {
    emits('clickItem', item, index);
};
const clickActions = (item, index) => {
    emits('clickActions', item, index);
};
console.log(props.list);
</script>
<template>
    <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane v-for="(item, index) in list" :key="index" :tab="item.title">
            <div
                class="containar"
                v-for="(ele, i) in item.content"
                :key="i"
                @click="clickItem(ele, i)"
            >
                <div class="avatar">
                    <a-avatar :src="ele.avatar"></a-avatar>
                </div>
                <div class="content">
                    <div>
                        <div v-if="ele.title" class="title">{{ ele.title }}</div>
                        <a-tag v-if="ele.tag" :type="ele.tagType">{{ ele.tag }}</a-tag>
                        <div v-if="ele.desc" class="desc">{{ ele.desc }}</div>
                        <div v-if="ele.time" class="time">{{ ele.time }}</div>
                    </div>
                </div>
            </div>
            <div class="action">
                <a-button
                    type="primary"
                    v-for="(item, index) in actions"
                    :key="index"
                    @click="clickActions(item, index)"
                >
                    <template #icon>
                        <component :is="`a-icon-${item.icon}`"></component>
                    </template>
                    {{ item.text }}
                </a-button>
            </div>
        </a-tab-pane>
    </a-tabs>
</template>
<style lang="scss" scoped></style>
