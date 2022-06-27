import Lifecycle from "./../Lifecycle";
import Home from "./../Lifecycle/Home.vue";
import About from "./../Lifecycle/About.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      component: Lifecycle,
      redirect: () => {
        return "/home";
      },
      children: [
        {
          path: "/home",
          component: Home,
        },
        {
          path: "/about",
          component: About,
        },
      ],
    },
  ],
});
