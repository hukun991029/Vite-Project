<script lang="ts" setup name="ChooseCity">
import type { SelectProps } from 'ant-design-vue';
import { onMounted, ref } from 'vue';
import province from '../lib/province.json';
import city from '../lib/city';
import { City } from './type';
let resultValue = ref<string>('请选择');
let defaultValue = ref<string>('0');
let visible = ref<boolean>(false);
let selectValue = ref<string | undefined>(undefined);
let options = ref<SelectProps['options']>([]);
// 过滤方法
const filterOption = (input: string, option: any) => {
    return option.value.includes(input);
};
// 选择框改变
const handleSelectChange = (value: string) => {
    console.log(value);
};
// 选择分类
const selectItem = (item: string, index: number) => {
    let el = document.getElementById(item);
    if (el) el.scrollIntoView();
};
const selectCityItem = (item: City, index: number) => {
    resultValue.value = item.name;
    visible.value = false;
};
const selectProvinceItem = (item: string, index: number) => {
    resultValue.value = item;
    visible.value = false;
};
// 控制弹窗显隐
const showDialog = () => {
    visible.value = !visible.value;
};
onMounted(() => {
    options.value = Object.values(city.cities)
        .flat(Infinity)
        .map((item) => {
            return {
                label: item.name,
                value: item.name
            };
        });
});
</script>
<template>
    <a-popover v-model:visible="visible" trigger="click" width="500">
        <template #content>
            <a-row>
                <a-col :span="12">
                    <a-radio-group v-model:value="defaultValue">
                        <a-radio-button value="0">按拼音</a-radio-button>
                        <a-radio-button value="1">按城市</a-radio-button>
                    </a-radio-group>
                </a-col>
                <a-col :span="12">
                    <a-select
                        v-model:value="selectValue"
                        show-search
                        placeholder="请选择"
                        style="width: 200px"
                        :options="options"
                        :filter-option="filterOption"
                        @change="handleSelectChange"
                    ></a-select>
                </a-col>
            </a-row>
            <div v-if="defaultValue === '0'">
                <ul class="city-code-wrap">
                    <li
                        v-for="(item, index) in Object.keys(city.cities)"
                        :key="index"
                        @click="selectItem(item, index)"
                    >
                        {{ item }}
                    </li>
                </ul>
                <div class="main-wrap">
                    <div v-for="(value, key) in city.cities" :key="key" :id="key" class="city-wrap">
                        <div>{{ key }}:</div>
                        <div class="city-category">
                            <div
                                class="city-item"
                                v-for="(item, index) in value"
                                :key="index"
                                @click="selectCityItem(item, index)"
                            >
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <ul class="city-code-wrap">
                    <li
                        v-for="(item, index) in Object.keys(province)"
                        :key="index"
                        @click="selectItem(item, index)"
                    >
                        {{ item }}
                    </li>
                </ul>
                <div class="main-wrap">
                    <div v-for="(value, key) in province" :key="key" :id="key">
                        <div v-for="(item, index) in value" :key="item.id" class="province-wrap">
                            <div>{{ item.name }}:</div>
                            <div
                                v-for="(ele, i) in item.data"
                                :key="i"
                                class="province-item"
                                @click="selectProvinceItem(ele, i)"
                            >
                                {{ ele }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <div class="choose-city" @click="showDialog">
            <span>{{ resultValue }}</span>
            <i :class="['iconfont', 'icon-down', { 'icon-selected': visible }]"></i>
        </div>
    </a-popover>
</template>
<style lang="scss" scoped>
.choose-city {
    cursor: pointer;
    width: fit-content;
}
i {
    display: inline-block;
    position: relative;
    top: 2px;
}
.icon-selected {
    transform: rotate(180deg);
    transition: all 0.25s linear;
}
.city-code-wrap {
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    width: 500px;
    list-style: none;
    li {
        margin: 5px 10px;
        border: 1px solid #ccc;
        padding: 5px 5px;
        cursor: pointer;
    }
}
.main-wrap {
    max-height: 300px;
    overflow: auto;
    .city-wrap {
        display: flex;
        margin-top: 10px;
        // width: 500px;
        .city-category {
            display: flex;
            flex-wrap: wrap;
            width: 500px;
            .city-item {
                margin: 0 10px;
                cursor: pointer;
            }
        }
    }
}
.province-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 500px;
    .province-item {
        margin: 5px 10px;
        cursor: pointer;
    }
}
</style>
