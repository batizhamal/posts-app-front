<template>
  <div class="body">
    <div class="nav-bar"><h1>Posts</h1></div>
    <div>
      <UILoader v-if="loading"></UILoader>
      <div v-else class="post">
        <div class="post__id">{{ post.id }}</div>
        <div class="post__info">
          <h3>{{ post.title }}</h3>
          <div class="post__body">{{ post.body }}</div>
        </div>
        <div>
          <UIButton title="Go back" color="grey" @click="$router.go(-1)" />
          <UIButton title="Delete" color="red" @click="deletePost(post.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UILoader from "@/ui/UILoader.vue";
import UIButton from "@/ui/UIButton.vue";

export default {
  components: { UILoader, UIButton },
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
      .catch((err) => {
        console.warn(err);
      })
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
  margin-bottom: 20px;
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
h3 {
  margin-left: 20px;
}
</style>
