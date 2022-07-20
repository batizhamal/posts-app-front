import Vue from "vue";
import VueRouter from "vue-router";
import PostList from "./../views/Posts/List";
import PostInfo from "./../views/Posts/Info";
import CreatePost from "./../views/Posts/Create";
import store from "@/store";
import { getPosts } from "@/api/posts";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      component: {
        render: (c) => c("router-view"),
      },
      children: [
        {
          path: "/",
          name: "list",
          component: PostList,
        },
        {
          path: ":id",
          name: "info",
          component: PostInfo,
        },
        {
          path: "new",
          name: "create",
          component: CreatePost,
        },
      ],
    },
  ],
});
