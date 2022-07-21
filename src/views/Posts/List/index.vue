<template>
  <div class="root">
    <div class="nav-bar">
      <h1>Posts</h1>
      <div class="nav-bar__buttons">
        <UIButton
          color="transparent"
          icon="https://super.so/icon/light/grid.svg"
          size="square"
          @click="view = 'mgrid'"
        />
        <UIButton
          color="transparent"
          icon="https://super.so/icon/light/sidebar.svg"
          size="square"
          @click="view = 'mtable'"
        />
      </div>
    </div>
    <UIPanel>
      <div>
        <UIButton
          icon="https://super.so/icon/dark/plus.svg"
          title="Create post"
          @click="createPost"
        />
      </div>
      <UISpacer />
      <UISearchbar @search="searchByTitle" />
    </UIPanel>

    <UILoader v-if="loading" center></UILoader>
    <component v-else :is="view" :posts="posts" />
  </div>
</template>

<script>
import UILoader from "@/ui/UILoader.vue";
import UIButton from "@/ui/UIButton.vue";
import UISearchbar from "@/ui/UISearchbar.vue";
import { getPosts } from "@/api/posts";
import { debounce } from "lodash";
import UIPanel from "@/ui/UIPanel.vue";
import UISpacer from "@/ui/UISpacer.vue";
import Mgrid from "./block/Grid.vue";
import Mtable from "./block/Table.vue";

export default {
  components: {
    Mgrid,
    Mtable,
    UILoader,
    UIButton,
    UISearchbar,
    UIPanel,
    UISpacer,
  },
  data() {
    return {
      loading: false,
      posts: [],
      view: "mtable",
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
body {
  margin: 0;
  overflow: hidden;
}
.root {
  font-size: 16px;
  width: 100%;
}

.nav-bar {
  $self: &;

  position: relative;
  background: rgb(35, 44, 70);
  color: rgb(255, 255, 255);
  height: $panel_height;
  width: 100%;
  text-align: left;
  margin: 0 auto;

  &__buttons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}

.nav-bar > h1 {
  position: absolute;
  left: 21px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
}

h2 {
  margin-top: 6px;
}
</style>
