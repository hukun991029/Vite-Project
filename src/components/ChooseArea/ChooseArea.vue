<script lang="ts" setup>
import { ref, watch } from 'vue';
import areaInfo from '../../utils/area.json';
interface selectList {
    name: string;
    code: string;
    children?: Array<any> | undefined;
}

let province = ref<string | undefined>(undefined);
let city = ref<string | undefined>(undefined);
let area = ref<string | undefined>(undefined);
let cityList = ref<selectList[]>([]);
let areaList = ref<selectList[]>([]);
let emit = defineEmits<{ (e: 'change', val: object): void }>();
watch(
    () => province.value,
    (val) => {
        if (val) {
            let temp = areaInfo.filter((item) => item.code === val);
            cityList.value = temp.length ? temp[0].children : [];
        }
        city.value = undefined;
        area.value = undefined;
    }
);
watch(
    () => city.value,
    (val) => {
        let temp = cityList.value.filter((item) => item.code === val);
        areaList.value = temp.length ? temp[0].children : [];
        area.value = undefined;
    }
);

watch(
    () => area.value,
    (val) => {
        if (val) {
            let data = {
                provinceData: <selectList>{},
                cityData: <selectList>{},
                areaData: <selectList>{}
            };
            data.provinceData = {
                name: areaInfo.filter((item) => item.code === province.value)[0].name,
                code: province.value as string
            };
            data.cityData = {
                name: cityList.value.filter((item) => item.code === city.value)[0].name,
                code: city.value as string
            };
            data.areaData = {
                name: areaList.value.filter((item) => item.code === val)[0].name,
                code: val
            };
            emit('change', data);
        }
    }
);
</script>
<template>
    <a-select
        ref="select"
        v-model:value="province"
        style="width: 120px"
        placeholder="请选择省"
        allowClear
    >
        <a-select-option v-for="item in areaInfo" :key="item.code" :value="item.code">{{
            item.name
        }}</a-select-option>
    </a-select>
    <a-select
        ref="select"
        v-model:value="city"
        style="width: 120px"
        placeholder="请选择市"
        allowClear
        :disabled="!province"
    >
        <a-select-option v-for="item in cityList" :key="item.code" :value="item.code">{{
            item.name
        }}</a-select-option>
    </a-select>
    <a-select
        ref="select"
        v-model:value="area"
        style="width: 120px"
        placeholder="请选择区"
        allowClear
        :disabled="!city || !province"
    >
        <a-select-option v-for="item in areaList" :key="item.code" :value="item.code">{{
            item.name
        }}</a-select-option>
    </a-select>
</template>
<style lang="scss" scoped></style>
