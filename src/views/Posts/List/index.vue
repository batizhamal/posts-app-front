<template>
  <div class="body">
    <div class="nav-bar"><h1>Posts</h1></div>
    <UILoader v-if="loading" center></UILoader>
    <div class="cards" v-else>
      <UIButton
        title="+"
        size="big"
        color="grey"
        class="center-button"
        @click="createPost"
      />
      <div class="flex-container">
        <Card v-for="post in $store.state.posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./block/Card";
import UILoader from "@/ui/UILoader.vue";
import UIButton from "@/ui/UIButton.vue";

export default {
  components: {
    Card,
    UILoader,
    UIButton,
  },
  data() {
    return {
      loading: false,
    };
  },
  created() {
    this.loading = true;
    this.$store
      .dispatch("fetchPosts")
      // .then(() => {})
      .catch((err) => console.warn(err))
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    createPost() {
      this.$router.push({
        query: {
          showCreatePopup: true,
        },
      });
    },
  },
};
</script>

<style>
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
  background: rgb(35, 44, 70);
  color: rgb(255, 255, 255);
  height: 60px;
  width: 100%;
  text-align: center;
  display: table;
  margin: 0 auto;
}

.center-button {
  display: block;
  margin: 20px auto;
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
