<script lang="ts" setup>
import md5 from 'md5';
import $api from '../../api/index.ts';
import useStore from '@/stores/store.js';
import { defineComponent, reactive, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
interface FormState {
    userName: string;
    userPwd: string;
    remember: boolean;
    checked: boolean;
}
const formState = reactive<FormState>({
    userName: '',
    userPwd: '',
    remember: true,
    checked: false
});
const store = useStore();
const router = useRouter();
const onFinish = async (values: any) => {
    let params = toRaw(values);
    params.userPwd = md5(params.userPwd);
    try {
        let res = await $api.login(params);
        store.setUserInfo(res);
        router.push({ path: '/index' });
    } catch (error) {
        console.log(error);
    }
};
</script>
<template>
    <div class="login-wrap">
        <div class="login-container" style="width: 364px">
            <h1 style="text-align: center">系 统</h1>
            <a-form
                :model="formState"
                name="basic"
                :wrapper-col="{ span: 24 }"
                autocomplete="off"
                @finish="onFinish"
            >
                <a-form-item
                    name="userName"
                    :rules="[
                        { required: true, message: '请输入您的用户名', trigger: 'blur' },
                        { min: 3, max: 8, message: '用户名长度3-8位' }
                    ]"
                >
                    <a-input v-model:value="formState.userName" placeholder="请输入用户名">
                        <template #prefix>
                            <user-outlined type="user" style="color: rgba(0, 0, 0, 0.25)" />
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item
                    name="userPwd"
                    :rules="[
                        { required: true, message: '请输入您的密码', trigger: 'blur' },
                        { min: 5, max: 12, message: '密码长度5-12位' }
                    ]"
                >
                    <a-input-password v-model:value="formState.userPwd" placeholder="请输入密码">
                        <template #prefix>
                            <lock-outlined type="user" style="color: rgba(0, 0, 0, 0.25)" />
                        </template>
                    </a-input-password>
                </a-form-item>
                <a-form-item>
                    <a-row justify="space-between">
                        <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
                        <a href="">忘记密码</a>
                    </a-row>
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 24 }">
                    <a-button type="primary" html-type="submit" style="width: 100%">登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.login-wrap {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
