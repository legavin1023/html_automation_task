import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",

    component: function () {
      return import("@/views/HomeView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
