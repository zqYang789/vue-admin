import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    redirect: '/index'
  },

  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'workbench',
    meta: { title: '工作台', belongs: '1'},
    children: [
      {
        path: '/index',
        component: resolve => require(['@/views/workbench/index'], resolve),
        meta: { title: '工作台', belongs: '1'}
      }
    ]
  },

{
  path: '/aPicture',
  component: Layout,
  children:[
  {
    path:'index',
    name: 'aPicture',
    component: () => import('@/views/form/index'),
    meta:{title:'一张图', icon:'workbench',belongs: '2'}
  }
]
},
{
  path: '/river',
  component: Layout,
  redirect: '/river/record',
  children:[
  {
    path:'/river/record',
    name: 'record',
    component: () => import('@/views/river/record'),
    meta:{title:'巡河记录', icon:'workbench',belongs: '3'}
  },
  {
    path:'/river/processing',
    name: 'processing',
    component: () => import('@/views/river/processing'),
    meta:{title:'事件处理', icon:'workbench',belongs: '3'}
  },
  {
    path:'/river/complaints',
    name: 'complaints',
    component: () => import('@/views/river/complaints'),
    meta:{title:'公众投诉', icon:'workbench',belongs: '3'}
  }



]
},
{
  path: '/information',
    component: Layout,
  redirect: '/information/essential1',
  name: 'information',
  meta: { title: '基本信息', icon: 'example' },
  children: [
    {
      path: 'essential1',
      name: 'essential1',
      component: () => import('@/views/information/essential1/index'),
    meta: { title: '基本一', icon: 'tree' }
},
  {
    path: 'essential2',
      name: 'essential2',
    component: () => import('@/views/information/essential2/index'),
    meta: { title: '基本二', icon: 'tree' }
  }
]
},
{
  path: '/statistical',
    component: Layout,
  children:[
  {
    path: 'index',
    name: 'statistical',
    component: () => import('@/views/statistical/index'),
    meta:{title:'统计分析',icon:'workbench'}
  }
]
},
{
  path: '/examination',
    component: Layout,
  children:[
  {
    path:'index',
    name: 'examination',
    component: () => import('@/views/examination/index'),
  meta:{title:'考核评价',icon: 'workbench'}
  }
]
},
{
  path: '/reporting',
    component: Layout,
  children:[
  {
    path: 'index',
    name: 'examination',
    component: () => import('@/views/examination/index'),
    meta:{title:'数据上报',icon:'workbench'}
  }
]
},
{
  path: '/system',
    component: Layout,
  children:[
  {
    path: 'index',
    name: 'system',
    component: () => import('@/views/system/index'),
    meta:{title:'系统管理',icon:'workbench'}
  }
]
},
{path: '*', redirect: '/404', hidden: true}
]

























export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
