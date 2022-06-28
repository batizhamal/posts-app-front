import Users from "./../views/Users";
import UserList from "./../views/Users/List";
import UserInfo from "./../views/Users/Info";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      component: Users,
      redirect: () => {
        return "/list";
      },
      children: [
        {
          path: "/list",
          component: UserList,
        },
        {
          path: "/info/:id",
          name: "info",
          component: UserInfo,
        },
      ],
    },
  ],
});
