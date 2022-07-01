import Vue from "vue";
import VueRouter from "vue-router";
import PostList from "./../views/Posts/List";
import PostInfo from "./../views/Posts/Info";
import CreatePost from "./../views/Posts/Create";
import store from "@/store";

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
          beforeEnter(to, _, next) {
            !idExists(to.params.id) ? next("/") : next();
          },
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

const idExists = (id) => {
  return store.state.posts.find((post) => post.id == id);
};
