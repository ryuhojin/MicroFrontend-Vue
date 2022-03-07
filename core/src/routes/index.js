import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/1",
    component: () =>  defineAsyncComponent(() => import("App/App")),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
