<template>
  <div class="body">
    <div class="nav-bar"><h1>Posts</h1></div>
    <div class="background">
      <h3>Please fill out the fields to make a post</h3>
      <form>
        <label
          >Enter title: <input type="text" v-model="title" name="title"
        /></label>
        <label>Body: <textarea v-model="body" name="body"></textarea></label>
        <label>
          <input type="checkbox" required name="terms" class="inline" /> I
          accept the
          <a href="https://pbs.twimg.com/media/FCSlOmEWEAEWmu3.jpg"
            >terms and conditions</a
          ></label
        >
        <div>
          <UIButton title="Go back" color="grey" @click="$router.go(-1)" />
          <UIButton title="Post" color="blue" @click="post" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { addPost } from "@/api/posts";
import UIButton from "@/ui/UIButton.vue";
export default {
  components: { UIButton },
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    post() {
      this.$store.commit("addPost", { title: this.title, body: this.body });
      addPost({ title: this.title, body: this.body })
        .then(() => {})
        .catch((err) => console.warn(err));

      this.$router.push("/list");
      this.$router.go();
    },
  },
};
</script>

<style scoped>
.background {
  width: 800px;
  margin: 20px auto;
  background-color: rgb(233, 233, 233);
  border-radius: 20px;
  padding: 20px;
}
form {
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
  margin: 0 auto;
  padding-bottom: 2em;
}
label {
  display: block;
  margin: 0.5rem 0;
}
input,
textarea,
select {
  margin: 10px 0 0 0;
  width: 100%;
  min-height: 2em;
  border-radius: 10px;
}
textarea {
  height: 6em;
}
h3 {
  text-align: center;
}
.inline {
  width: unset;
  margin: 0 0.5em 0 0;
  vertical-align: middle;
}
</style>
