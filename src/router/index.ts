import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./baseRouteMap";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
