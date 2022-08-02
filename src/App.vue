<!--
 * @Author: your name
 * @Date: 2022-04-07 09:15:53
 * @LastEditTime: 2022-08-01 23:52:02
 * @LastEditors: hukun 1228836483@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \big-screen-zgyhd:\vite-project\src\App.vue
-->
<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
</script>
<template>
    <a-config-provider :locale="zhCN"><router-view></router-view></a-config-provider>
</template>

<style></style>
