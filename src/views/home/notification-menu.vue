<script lang="ts" setup>
import { ListOptions, ActionOptions } from '@/components/List/listType';
import List from '@/components/List/index.vue';
import { reactive } from 'vue';

const list = reactive<ListOptions[]>([
    {
        title: '通知',
        content: [
            {
                title: '蒂姆·库克回复了你的邮件',
                time: '2019-05-08 14:33:18',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png'
            },
            {
                title: '乔纳森·伊夫邀请你参加会议',
                time: '2019-05-08 14:33:18',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png'
            },
            {
                title: '斯蒂夫·沃兹尼亚克已批准了你的休假申请',
                time: '2019-05-08 14:33:18',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png'
            }
        ]
    },
    {
        title: '关注',
        content: [
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '曲丽丽 评论了你',
                desc: '描述信息描述信息描述信息',
                time: '3小时前'
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '曲丽丽 评论了你',
                desc: '描述信息描述信息描述信息',
                time: '3小时前'
            },
            {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '曲丽丽 评论了你',
                desc: '描述信息描述信息描述信息',
                time: '3小时前'
            }
        ]
    },
    {
        title: '代办',
        content: [
            {
                title: '任务名称',
                desc: '任务需要在 2017-01-12 20:00 前启动',
                tag: '未开始',
                tagType: ''
            },
            {
                title: '第三方紧急代码变更',
                desc: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                tag: '马上到期',
                tagType: 'danger'
            },
            {
                title: '信息安全考试',
                desc: '指派竹尔于 2017-01-09 前完成更新并发布',
                tag: '已耗时8天',
                tagType: 'warning'
            }
        ]
    }
]);
const actions = reactive<ActionOptions[]>([
    { icon: 'DeleteOutlined', text: '删除' },
    { icon: 'EditOutlined', text: '编辑' }
]);
const clickItem = (item, index) => {
    console.log(item, index);
};
const clickActions = (item, index) => {
    console.log(item, index);
};
</script>
<template>
    <NotificationMenu>
        <List
            :list="list"
            :actions="actions"
            @clickItem="clickItem"
            @clickActions="clickActions"
        ></List>
    </NotificationMenu>
</template>
<style lang="scss" scoped></style>
