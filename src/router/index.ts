import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import { h, resolveComponent } from 'vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/index.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/index',
        component: () => import('../views/main/index.vue'),
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '/system-manage',
                name: 'System-Manage',
                component: {
                    render: () => h(resolveComponent('router-view'))
                },
                meta: {
                    title: '系统管理',
                    icon: 'SettingOutlined'
                },
                children: [
                    {
                        path: '/user-manage',
                        name: 'User-Manage',
                        component: () => import('../views/system-manage/user-manage.vue'),
                        meta: {
                            title: '用户管理',
                            icon: 'UserOutlined'
                        }
                    },
                    {
                        path: '/menu-manage',
                        name: 'Menu-Manage',
                        component: () => import('../views/system-manage/menu-manage.vue'),
                        meta: {
                            title: '菜单管理',
                            icon: 'MenuOutlined'
                        }
                    },
                    {
                        path: '/role-manage',
                        name: 'Role-Manage',
                        component: () => import('../views/system-manage/role-manage.vue'),
                        meta: {
                            title: '角色管理',
                            icon: 'TrademarkCircleOutlined'
                        }
                    },
                    {
                        path: '/dept-manage',
                        name: 'Dept-Manage',
                        component: () => import('../views/system-manage/dept-manage.vue'),
                        meta: {
                            title: '部门管理',
                            icon: 'DeploymentUnitOutlined'
                        }
                    }
                ]
            },
            {
                path: '/approval-manage',
                name: 'Approval-Manage',
                component: {
                    render: () => h(resolveComponent('router-view'))
                },
                meta: {
                    title: '审批管理',
                    icon: 'SolutionOutlined'
                },
                children: [
                    {
                        path: '/application-leave',
                        name: 'Application-Leave',
                        component: () => import('../views/system-manage/user-manage.vue'),
                        meta: {
                            title: '休假申请',
                            icon: 'IdcardOutlined'
                        }
                    },
                    {
                        path: '/pending-approval',
                        name: 'Pending-Approval',
                        component: () => import('../views/system-manage/menu-manage.vue'),
                        meta: {
                            title: '待我审批',
                            icon: 'SoundOutlined'
                        }
                    }
                ]
            },
            {
                path: '/components-manage',
                name: 'Components-Manage',
                component: {
                    render: () => h(resolveComponent('router-view'))
                },
                meta: {
                    title: '组件管理',
                    icon: 'HomeOutlined'
                },
                children: [
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
                            icon: 'ProfileOutlined'
                        }
                    },
                    {
                        path: '/calendar',
                        name: 'Calendar',
                        component: () => import('../views/home/calendar.vue'),
                        meta: {
                            title: '日历',
                            icon: 'CalendarOutlined'
                        }
                    },
                    {
                        path: '/chooseCity',
                        name: 'ChooseCity',
                        component: () => import('../views/home/choose-city.vue'),
                        meta: {
                            title: '城市选择',
                            icon: 'CalendarOutlined'
                        }
                    },
                    {
                        path: '/formMenu',
                        name: 'FormMenu',
                        component: () => import('../views/home/form-menu.vue'),
                        meta: {
                            title: '表单',
                            icon: 'CalendarOutlined'
                        }
                    }
                ]
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string;
    next();
});
export default router;
