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
      path: "/calculator",
      name: "calculator",
      component: () => import("../views/CalculatorView.vue"),
    },
    {
      path: "/boolean-operations",
      name: "boolean-operations",
      component: () => import("../views/BooleanOperations.vue"),
    },
    {
      path: "/random-generator",
      name: "random-generator",
      component: () => import("../views/RandomGenerator.vue"),
    },
    {
      path: "/converter",
      name: "converter",
      component: () => import("../views/Converter.vue"),
    },
  ],
});

export default router;
