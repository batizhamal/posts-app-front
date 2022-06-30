import Vue from "vue";
import VueRouter from "vue-router";
import Users from "./../views/Users";
import UserList from "./../views/Users/List";
import UserInfo from "./../views/Users/Info";
import CreateUser from "./../views/Users/Create";

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
          name: "list",
          component: UserList,
        },
        {
          path: "/info/:id",
          name: "info",
          component: UserInfo,
        },
        {
          path: "/create",
          name: "create",
          component: CreateUser,
        },
      ],
    },
  ],
});
