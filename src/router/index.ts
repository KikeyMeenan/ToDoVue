import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create-item',
    name: 'CreateItem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "createitem" */ '../views/CreateItem.vue'),
  },
  {
    path: '/edit-item/:id',
    name: 'EditItem',
    component: () => import(/* webpackChunkName: "edititem" */ '../views/EditItem.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "categories" */ '../views/CategoryList.vue'),
  },
  {
    path: '/create-category',
    name: 'CreateCategory',
    component: () => import(/* webpackChunkName: "createcategory" */ '../views/CreateCategory.vue'),
  },
  {
    path: '/edit-category/:id',
    name: 'EditCategory',
    component: () => import(/* webpackChunkName: "editcategory" */ '../views/EditCategory.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
