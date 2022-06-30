<template>
  <div>
    <div class="user">
      <img src="../../../../assets/default-avatar.png" />
      <div class="user-name-and-link">
        <p>{{ user.name }}</p>

        <button @click="onClickItem" class="more">More</button>
        <button @click="$emit('deleteUser', user.id)" class="delete">
          Delete
        </button>
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
    onClickItem() {
      this.$router.push({
        name: "info",
        params: { id: this.user.id },
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
.more {
  border: none;
  background-color: rgb(189, 196, 214);
  color: black;
  height: 20px;
  width: 60px;
  cursor: pointer;
  display: inline-block;
}
.delete {
  border: none;
  background-color: rgb(214, 89, 89);
  color: black;
  height: 20px;
  width: 60px;
  cursor: pointer;
  display: inline-block;
  margin-left: 10px;
}
</style>
