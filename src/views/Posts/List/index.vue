<template>
  <div class="body">
    <div class="nav-bar"><h1>Posts</h1></div>

    <AppLoader v-if="loading"></AppLoader>
    <div class="cards" v-else>
      <button @click="$router.push({ name: 'create' })" class="create-button">
        +
      </button>
      <div class="flex-container">
        <Card v-for="post in $store.state.posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./block/Card";
import AppLoader from "@/ui/AppLoader.vue";

export default {
  components: {
    Card,
    AppLoader,
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

.create-button {
  cursor: pointer;
  background-color: rgb(189, 196, 214);
  color: rgb(100, 100, 100);
  display: block;
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 60px;
  margin: 20px auto;
  font-size: 30px;
}
.create-button:hover {
  background-color: rgb(35, 44, 70);
  color: white;
  transition: 0.5s;
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
