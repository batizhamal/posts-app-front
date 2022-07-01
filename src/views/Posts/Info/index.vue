<template>
  <div class="body">
    <div class="nav-bar"><h1>Some App</h1></div>
    <div class="sub-nav-bar"><h2>Post</h2></div>
    <div>
      <AppSpinner v-if="loading"></AppSpinner>
      <div v-else class="post">
        <!-- <img src="../../../assets/letter.png" /> -->
        <div class="post__id">{{ post.id }}</div>
        <div class="post__info">
          <h3>{{ post.title }}</h3>
          <div class="post__body">{{ post.body }}</div>
        </div>
        <!-- TODO: users' id fetch to users in future -->
        <button @click="$router.go(-1)">Go back</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppSpinner from "@/components/ui/AppSpinner.vue";

export default {
  components: { AppSpinner },
  data() {
    return {
      post: {},
      loading: false,
    };
  },
  created() {
    this.loading = true;
    this.$store
      .dispatch("fetchPost", this.$route.params.id)
      .then((result) => {
        this.post = result;
      })
      .catch((err) => console.warn(err))
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<style scoped>
.post {
  display: block;
  width: 800px;
  margin: 20px auto;
}
.post__id {
  display: inline-block;
  width: 200px;
  font-size: 96px;
}
.post__info {
  display: inline-block;
  width: 600px;
}
.post__body {
  border-radius: 20px;
  background-color: rgb(233, 233, 233);
  padding: 20px;
  display: block;
}
img {
  height: 150px;
  width: 150px;
  margin-top: 20px;
  margin-left: 20px;
  display: inline-block;
}
button {
  height: 35px;
  width: 80px;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: rgb(189, 196, 214);
  color: black;
  cursor: pointer;
  display: inline-block;
  margin-top: 30px;
  margin-left: 0;
}
button:hover {
  background-color: rgb(35, 44, 70);
  color: white;
  transition: 0.5s;
}
h3 {
  margin-left: 20px;
}
</style>
