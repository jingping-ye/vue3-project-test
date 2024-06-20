import { createRouter, createWebHashHistory, createMemoryHistory, createWebHistory } from "vue-router";
import Home from "@/views/home/index.vue";
import Login from "@/views/login/index.vue";
import NotFound from "@/views/error-page/404.vue";

const Layouts = () => import("../layouts/index.vue");
const routes = [
  {
    path: "/",
    redirect: "/home",
    component: Layouts,
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "/user/:id",
        name: "UserDetail",
        component: () => import("../views/user/detail/index.vue"),
        props: { a: 1, b: 2 },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:patchMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
