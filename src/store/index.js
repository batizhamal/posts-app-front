import { getPostById, getPosts } from "@/api/posts";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    addPost(state, post) {
      const nextId = Math.max(...state.posts.map((post) => post.id)) + 1;
      state.posts.push({
        id: nextId,
        title: post.title,
        body: post.body,
      });
      console.log(state.posts);
    },
    deletePost(state, id) {
      state.posts.splice(
        state.posts.findIndex((post) => post.id == id),
        1
      );
    },
  },
  actions: {
    fetchPosts: async ({ state }) => {
      state.posts = await getPosts();
    },

    fetchPost: async (_, id) => {
      return await getPostById(id);
    },
  },
});
