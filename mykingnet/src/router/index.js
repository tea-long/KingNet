import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/common/Home'
Vue.use(Router);

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     redirect: '/dashboard'
        // },
        {
            path: '/',
            name:'home',
            // component: resolve => require(['../components/common/Home.vue'], resolve),
            //也可先引入路径，再配置组件
            component:home,
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/internet',
                    component: resolve => require(['../components/page/Internet.vue'], resolve),
                    meta: { title: 'IT行业' }
                },
                {
                    path: '/music',
                    component: resolve => require(['../components/page/Music.vue'], resolve),
                    meta: { title: '音乐' }
                },
                {
                    path: '/film',
                    component: resolve => require(['../components/page/Film.vue'], resolve),
                    meta: { title: '电影' }
                },
                {
                    path: '/english',
                    component: resolve => require(['../components/page/English.vue'], resolve),
                    meta: { title: '英语' }
                },
                // {
                //     // 富文本编辑器组件
                //     path: '/editor',
                //     component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                //     meta: { title: '富文本编辑器' }
                // },
                // {
                //     // markdown组件
                //     path: '/markdown',
                //     component: resolve => require(['../components/page/Markdown.vue'], resolve),
                //     meta: { title: 'markdown编辑器' }
                // },
                // {
                //     // 图片上传组件
                //     path: '/upload',
                //     component: resolve => require(['../components/page/Upload.vue'], resolve),
                //     meta: { title: '文件上传' }
                // },
                // {
                //     // vue-schart组件
                //     path: '/charts',
                //     component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                //     meta: { title: 'schart图表' }
                // },
                // {
                //     // 拖拽列表组件
                //     path: '/drag',
                //     component: resolve => require(['../components/page/DragList.vue'], resolve),
                //     meta: { title: '拖拽列表' }
                // },
                // {
                //     // 权限页面
                //     path: '/permission',
                //     component: resolve => require(['../components/page/Permission.vue'], resolve),
                //     meta: { title: '权限测试', permission: true }
                // }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
