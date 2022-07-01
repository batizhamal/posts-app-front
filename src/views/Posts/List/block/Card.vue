<template>
  <div class="card">
    <img src="../../../../assets/letter.png" />
    <p>{{ post.title }}</p>
    <div class="card__buttons">
      <button @click="onClickItem" class="card__button grey-button">
        More
      </button>
      <button @click="deletePost(post.id)" class="card__button red-button">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { deletePost } from "@/api/posts";
export default {
  props: {
    post: {
      type: Object,
    },
  },
  methods: {
    deletePost(id) {
      this.$store.commit("deletePost", id);
      // deletePost(id);
    },
    onClickItem() {
      this.$router.push({
        name: "info",
        params: { id: this.post.id },
      });
    },
  },
};
</script>
<style scoped>
.card {
  background-color: rgb(233, 233, 233);
  border-radius: 20px;
  width: 400px;
  height: 300px;
  margin: auto auto;
  margin-bottom: 20px;
  padding: 10px;
}
.card__buttons {
  display: block;
  margin: 0 110px;
}
.card__button {
  height: 35px;
  width: 80px;
  border: 2px solid transparent;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
}
/* .card__button:hover {
  border: 2px solid rgb(35, 44, 70);
  transition: 0.5s;
} */
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
.grey-button:hover {
  background-color: rgb(35, 44, 70);
  color: white;
  transition: 0.5s;
}
img {
  width: 100px;
  height: 100px;
  margin: 50px auto;
  margin-bottom: 30px;
  display: block;
}
p {
  text-align: center;
  margin: 0px auto;
  margin-bottom: 30px;
}
</style>
