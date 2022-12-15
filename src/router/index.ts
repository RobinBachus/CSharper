import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/calculations",
      name: "calculations",
      component: () => import("../views/CalculatorView.vue"),
    },
    {
      path: "/boolean-operations",
      name: "boolean-operations",
      component: () => import("../views/BooleanOperationsView.vue"),
    },
    {
      path: "/random-generator",
      name: "random-generator",
      component: () => import("../views/RandomGeneratorView.vue"),
    },
    {
      path: "/converter",
      name: "converter",
      component: () => import("../views/ConverterView.vue"),
    },
    {
      path: "/debug",
      name: "debug",
      component: () => import("../views/DebugView.vue"),
    },
  ],
});

export default router;
