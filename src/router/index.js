import UserList from "./../UserList";
import List from "../UserList/List.vue";
import Info from "../UserList/Info.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      component: UserList,
      redirect: () => {
        return "/list";
      },
      children: [
        {
          path: "/list",
          component: List,
        },
        {
          path: "/info",
          name: "info",
          component: Info,
        },
      ],
    },
  ],
});
