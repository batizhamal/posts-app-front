<template>
  <div>
    <!-- <router-link
      :to="{
        path: '/info',
        query: user,
      }"
      >{{ user.id }} {{ user.name }} {{ user.age }} years old</router-link
    > -->
    <div class="user">
      <img src="../../../../assets/default-avatar.png" />
      <div class="user-name-and-link">
        <p>{{ user.name }}</p>

        <button @click="onClickItem(user)">More</button>
        <!-- <router-link
          :to="{
            path: '/info',
            params: { user },
          }"
          >See more</router-link
        > -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    onClickItem(user) {
      this.$router.push({
        name: "info",
        params: { id: user.id },
      });
    },
  },
};
</script>
<style scoped>
div[class="user"] {
  background-color: rgb(233, 233, 233);
  border: 3px solid rgb(255, 255, 255);
  width: 250px;
  height: 80px;
  margin-bottom: 10px;
}
div[class="user-name-and-link"] {
  display: inline-block;
  margin-left: 15px;
}
img {
  width: 50px;
  height: 50px;
  margin-left: 40px;
  margin-top: 10px;
  display: inline-block;
}
p {
  margin-bottom: 9px;
  margin-top: 0px;
}
button {
  border: none;
  background-color: rgb(189, 196, 214);
  color: black;
  height: 20px;
  width: 60px;
  cursor: pointer;
}
</style>
