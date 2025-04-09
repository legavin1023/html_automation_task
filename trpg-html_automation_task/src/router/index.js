import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",

    component: function () {
      return import("@/views/HomeView.vue");
    },
  },
  {
    path: "/CssCustom",
    name: "CssCustom",

    component: function () {
      return import("@/components/CssCustom.vue");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
