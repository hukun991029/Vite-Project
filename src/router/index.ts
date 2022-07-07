import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import { h, resolveComponent } from 'vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/main/index.vue'),
        children: [
            {
                path: '/home',
                name: 'Home',
                // component: {
                //     render: () => h(resolveComponent('router-view'))
                // },
                component: () => import('../views/home/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'HomeOutlined'
                }
                // children: [
                //     {
                //         path: '/personal/info',
                //         name: 'PersonalInfo',
                //         component: () => import('../views/personal-info/index.vue'),
                //         meta: {
                //             title: '测试跳转',
                //             icon: 'QqOutlined'
                //         }
                //     }
                // ]
            },
            {
                path: '/icon-selected',
                name: 'IconSelected',
                component: () => import('../views/home/icon-selected.vue'),
                meta: {
                    title: '图标选择器',
                    icon: 'AppstoreOutlined'
                }
            },
            {
                path: '/provinces-cities-selected',
                name: 'ProvincesCitiesSelected',
                component: () => import('../views/home/provinces-cities-selected.vue'),
                meta: {
                    title: '省市区选择器',
                    icon: 'EnvironmentOutlined'
                }
            },
            {
                path: '/trend-marker',
                name: 'TrendMarker',
                component: () => import('../views/home/trend-marker.vue'),
                meta: {
                    title: '趋势标记',
                    icon: 'FundOutlined'
                }
            },
            {
                path: '/time-selected',
                name: 'Time-Selected',
                component: () => import('../views/home/time-selected.vue'),
                meta: {
                    title: '时间选择',
                    icon: 'FieldTimeOutlined'
                }
            },
            {
                path: '/notification-menu',
                name: 'NotificationMenu',
                component: () => import('../views/home/notification-menu.vue'),
                meta: {
                    title: '通知菜单',
                    icon: 'SoundOutlined'
                }
            },
            {
                path: '/city-selected',
                name: 'CitySelected',
                component: () => import('../views/home/city-selected.vue'),
                meta: {
                    title: '城市选择',
                    icon: 'SoundOutlined'
                }
            },
            {
                path: '/progress',
                name: 'Progress',
                component: () => import('../views/home/progress.vue'),
                meta: {
                    title: '进度条',
                    icon: 'CheckCircleOutlined'
                }
            },
            {
                path: '/menu',
                name: 'Menu',
                component: () => import('../views/home/menu.vue'),
                meta: {
                    title: '导航菜单',
                    icon: 'SoundOutlined'
                }
            },
            {
                path: '/calendar',
                name: 'Calendar',
                component: () => import('../views/home/calendar.vue'),
                meta: {
                    title: '日历',
                    icon: 'SoundOutlined'
                }
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
// router.beforeEach((to,from,next)=>{
// // console.log(to,from,next);

// })
export default router;
