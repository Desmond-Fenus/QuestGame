import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomePage.vue";
import About from "./views/AdminPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
