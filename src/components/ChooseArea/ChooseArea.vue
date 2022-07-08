<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { SelectProps } from 'ant-design-vue';
import areaInfo from '../../utils/area.json';
let province = ref<string | undefined>(undefined);
let city = ref<string | undefined>(undefined);
let area = ref<string | undefined>(undefined);
const provinceList = areaInfo.map((item) => {
    return {
        label: item.name,
        value: item.code
    };
});
const cityList = computed(() => {
    if (!province.value) {
        return [];
    } else {
        return areaInfo
            .filter((item) => item.code === province.value)
            .map((item) => {
                return item.children.map((ele) => {
                    return {
                        label: ele.name,
                        value: ele.code
                    };
                });
            })
            .flat();
    }
});

const areaList = computed(() => {});
const provinceOptions = ref<SelectProps['options']>(provinceList);
const cityOptions = ref<SelectProps['options']>(cityList);
const areaOptions = ref<SelectProps['options']>(areaList);
const changeProvince = (value: string): void => {
    province.value = value;
    city.value = undefined;
    area.value = undefined;
};
const changeCity = (value: string): void => {};
const changeArea = (value: string): void => {};
</script>
<template>
    {{ cityList }}
    <a-select
        ref="select"
        v-model:value="province"
        style="width: 120px"
        :options="provinceOptions"
        @change="changeProvince"
        placeholder="请选择省"
        allowClear
    >
    </a-select>
    <a-select
        ref="select"
        v-model:value="city"
        style="width: 120px"
        :options="cityOptions"
        @change="changeCity"
        placeholder="请选择市"
        allowClear
        :disabled="!province"
    >
    </a-select>
    <a-select
        ref="select"
        v-model:value="area"
        style="width: 120px"
        :options="areaOptions"
        @change="changeArea"
        placeholder="请选择区"
        allowClear
        :disabled="!city || !province"
    >
    </a-select>
</template>
<style lang="scss" scoped></style>
