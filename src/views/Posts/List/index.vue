<template>
  <div class="body">
    <div class="nav-bar">
      <h1>Posts</h1>
      <UIButton
        icon="https://super.so/icon/dark/plus.svg"
        size="big"
        color="white"
        @click="createPost"
        class="nav-bar__button"
      />
    </div>
    <UISearchbar @search="searchByTitle" />
    <UILoader v-if="loading" center></UILoader>
    <div class="cards" v-else>
      <div class="flex-container">
        <Card v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./block/Card";
import UILoader from "@/ui/UILoader.vue";
import UIButton from "@/ui/UIButton.vue";
import UISearchbar from "@/ui/UISearchbar.vue";
import { getPosts } from "@/api/posts";
import { debounce } from "lodash";

export default {
  components: {
    Card,
    UILoader,
    UIButton,
    UISearchbar,
  },
  data() {
    return {
      loading: false,
      posts: [],
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    createPost() {
      this.$router.push({
        query: {
          showCreatePopup: true,
        },
        params: {},
      });
    },
    async getPosts(title = null) {
      this.loading = true;
      try {
        this.posts = await getPosts({ title });
      } catch (error) {
        throw error;
      } finally {
        this.loading = false;
      }
    },
    searchByTitle: debounce(function (title) {
      this.getPosts(title);
    }, 1000),
  },
};
</script>

<style lang="scss">
.body {
  font-size: 16px;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.cards {
  overflow: scroll;
  height: 100%;
}

.nav-bar {
  $self: &;

  position: relative;
  background: rgb(35, 44, 70);
  color: rgb(255, 255, 255);
  height: 60px;
  width: 100%;
  text-align: center;
  margin: 0 auto 20px;

  &__button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
  }
}

.nav-bar > h1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  flex-basis: 200px;
  margin-bottom: 100px;
}
h2 {
  margin-top: 6px;
}
</style>
