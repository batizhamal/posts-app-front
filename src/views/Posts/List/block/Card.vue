<template>
  <div class="card">
    <img src="../../../../assets/letter.png" />
    <p>{{ post.title }}</p>
    <div class="card__buttons">
      <UIButton title="More" color="grey" @click="onClickItem" />
      <UIButton title="Delete" color="red" @click="deletePost(post.id)" />
    </div>
  </div>
</template>

<script>
import UIButton from "@/ui/UIButton.vue";
export default {
  components: { UIButton },
  props: {
    post: {
      type: Object,
    },
  },
  methods: {
    deletePost(id) {
      this.$router.push({
        query: {
          showDeletePopup: true,
          postId: id,
        },
      });
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
  margin: 10px 10px;
  position: relative;
}
.card__buttons {
  position: absolute;
  top: auto;
  left: 50%;
  transform: translateX(-50%);
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
