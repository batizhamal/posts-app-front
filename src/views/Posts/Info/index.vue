<template>
  <div class="body">
    <div class="nav-bar"><h1>Posts</h1></div>
    <div>
      <AppLoader v-if="loading"></AppLoader>
      <div v-else class="post">
        <!-- <img src="../../../assets/letter.png" /> -->
        <div class="post__id">{{ post.id }}</div>
        <div class="post__info">
          <h3>{{ post.title }}</h3>
          <div class="post__body">{{ post.body }}</div>
        </div>
        <!-- TODO: users' id fetch to users in future -->
        <button class="grey-button" @click="$router.go(-1)">Go back</button>
        <button class="red-button" @click="deletePost(post.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoader from "@/ui/AppLoader.vue";

export default {
  components: { AppLoader },
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
  methods: {
    deletePost(id) {
      this.$router.replace({
        query: {
          showDeletePopup: true,
          postId: id,
        },
      });
    },
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
  color: black;
  cursor: pointer;
  display: inline-block;
  margin: 30px 20px 20px 0;
}
.red-button {
  background-color: rgb(214, 89, 89);
}
.grey-button {
  background-color: rgb(189, 196, 214);
}
.red-button:hover {
  background-color: rgb(149, 0, 0);
  color: white;
  transition: 0.5s;
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
