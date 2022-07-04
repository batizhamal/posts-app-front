<template>
  <div class="body">
    <DeletePopup></DeletePopup>
    <div class="nav-bar"><h1>Some App</h1></div>
    <div class="sub-nav-bar"><h2>List</h2></div>

    <Loader v-if="loading"></Loader>
    <div v-else>
      <button @click="$router.push({ name: 'create' })" class="create-button">
        +
      </button>
      <Card v-for="post in $store.state.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import Card from "./block/Card";
import Loader from "@/components/ui/Loader.vue";
import DeletePopup from "@/components/ui/DeletePopup.vue";

export default {
  components: {
    Card,
    Loader,
    DeletePopup,
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
.sub-nav-bar {
  background: rgb(233, 233, 233);
  color: rgb(35, 44, 70);
  height: 29px;
  width: 100%;
  text-align: center;
  margin-top: -6px;
  margin-left: auto;
  margin-right: auto;
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
h2 {
  margin-top: 6px;
}
</style>
