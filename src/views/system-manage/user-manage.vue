<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import type { FormInstance, CascaderProps } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';
const formRef = ref<FormInstance>();
interface FormState {
    userId: string;
    userName: string;
    status: number;
}
type Key = string | number;
interface DataType {
    key: Key;
    name: string;
    age: number;
    address: string;
}
//用户状态数据
const selectList = reactive([
    {
        label: '全部',
        value: 0
    },
    {
        label: '在职',
        value: 1
    },
    {
        label: '离职',
        value: 2
    },
    {
        label: '试用',
        value: 3
    }
]);
// 查询的数据字段
const formState = reactive<FormState>({
    userId: '',
    userName: '',
    status: 0
});
// 表格数据
let tableData: DataType[] = reactive([]);
// 表格配置
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        align: 'center'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        align: 'center'
    },
    {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center'
    }
];
onMounted(() => {
    for (let i = 0; i < 60; i++) {
        tableData.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`
        });
    }
});
let loading = ref<boolean>(false);
let dialogVisible = ref<boolean>(false);
let queryParams = reactive({
    pageNum: 1,
    pageSize: 10,
    total: 0
});
let action = ref('');
const rules: Record<string, Rule[]> = {
    pass: [{ required: true, trigger: 'change' }]
};
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 }
};
const options: CascaderProps['options'] = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake'
                    }
                ]
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men'
                    }
                ]
            }
        ]
    }
];
const formData = reactive({
    userName: '',
    passWord: '',
    checkPassWord: '',
    email: '',
    phone: '',
    roleList: [],
    deptId: '',
    state: ''
});
// 重置
const handleReset = () => {
    formRef.value.resetFields();
};
// 查询
const handleSearch = () => {};
// 表格页码改变
const handleChange = (pagination) => {
    console.log(pagination);
};
// 编辑
const handleEdit = () => {
    action.value = 'edit';
    dialogVisible.value = true;
};
// 删除
const handleDel = () => {};
// 多选的数组
const state = reactive<{
    selectedRowKeys: Key[];
    loading: boolean;
}>({
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
});
// 多选表格数据
const onSelectChange = (selectedRowKeys: Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    state.selectedRowKeys = selectedRowKeys;
};
// 新增
const handleAdd = () => {
    action.value = 'add';
    dialogVisible.value = true;
};
// 删除多个
const handleDelMany = () => {};
// 弹窗确定
const handleConfirm = () => {};
// 弹窗取消
const handleCancel = () => {};
</script>
<template>
    <div class="user-manage">
        <a-card>
            <a-form
                :model="formState"
                ref="formRef"
                name="basic"
                layout="inline"
                autocomplete="off"
            >
                <a-form-item label="用户Id" name="userId">
                    <a-input v-model:value="formState.userId" size="small" />
                </a-form-item>

                <a-form-item label="用户名" name="userName">
                    <a-input v-model:value="formState.userName" size="small" />
                </a-form-item>
                <a-form-item label="用户状态" name="status">
                    <a-select
                        ref="select"
                        v-model:value="formState.status"
                        style="width: 120px"
                        size="small"
                    >
                        <a-select-option v-for="item in selectList" :value="item.value">{{
                            item.label
                        }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item>
                    <a-space>
                        <a-button type="primary" @click="handleSearch" size="small">查询</a-button>
                        <a-button @click="handleReset" size="small">重置</a-button>
                    </a-space>
                </a-form-item>
            </a-form>

            <div class="mt20">
                <a-space>
                    <a-button type="primary" @click="handleAdd">新增</a-button>
                    <a-button type="primary" danger @click="handleDelMany">批量删除</a-button>
                </a-space>
            </div>
            <div class="mt20">
                <a-table
                    bordered
                    :dataSource="tableData"
                    :columns="columns"
                    :row-selection="{
                        selectedRowKeys: state.selectedRowKeys,
                        onChange: onSelectChange
                    }"
                    :pagination="{
                        hideOnSinglePage: true,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        showTotal: (total, range) => `共${total}条`
                    }"
                    @change="handleChange"
                >
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'edit'">
                            <span>
                                <a @click="handleEdit">编辑</a>
                                <a-divider type="vertical" />
                                <a @click="handleDel">删除</a>
                            </span>
                        </template>
                    </template>
                </a-table>
            </div>
        </a-card>

        <a-modal
            v-model:visible="dialogVisible"
            :title="action === 'edit' ? '编辑' : '新增'"
            @ok="handleConfirm"
        >
            <template #footer>
                <a-button key="back" @click="handleCancel">取消</a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleConfirm">
                    确定
                </a-button>
            </template>
            <a-form
                ref="formRef"
                name="custom-validation"
                :model="formData"
                :rules="rules"
                v-bind="layout"
            >
                <a-form-item has-feedback label="用户名" name="userName">
                    <a-input v-model:value="formData.userName" />
                </a-form-item>
                <a-form-item has-feedback label="邮箱" name="email">
                    <a-input v-model:value="formData.email" />
                </a-form-item>
                <a-form-item has-feedback label="部门" name="deptId">
                    <a-input v-model:value="formData.deptId" />
                </a-form-item>
                <a-form-item has-feedback label="系统角色" name="roleList">
                    <a-cascader
                        v-model:value="formData.roleList"
                        :options="options"
                        placeholder="Please select"
                        change-on-select
                    />
                </a-form-item>
                <a-form-item has-feedback label="状态" name="deptId">
                    <a-select ref="select" v-model:value="formData.state">
                        <a-select-option v-for="item in selectList.slice(1)" :value="item.value">{{
                            item.label
                        }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item has-feedback label="岗位" name="deptId">
                    <a-input v-model:value="formData.deptId" />
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>
<style lang="scss" scoped>
.mt20 {
    margin-top: 20px;
}
</style>
