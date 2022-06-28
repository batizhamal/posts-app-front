<template>
  <div>
    <div class="sub-nav-bar"><h2>Info</h2></div>
    <div>
      <AppSpinner v-if="loading"></AppSpinner>
      <div class="user-info" v-else>
        <img src="../../../assets/default-avatar.png" />
        <div class="user-data">
          <p>Id: {{ user.id }}</p>
          <p>Name: {{ user.name }}</p>
          <p>Age: {{ user.age }}</p>
        </div>
      </div>
    </div>

    <button @click="$router.go(-1)">Go back</button>
  </div>
</template>

<script>
import { fetchUser } from "@/api";
import AppSpinner from "@/components/ui/AppSpinner.vue";

export default {
  components: { AppSpinner },
  data() {
    return {
      user: {},
      loading: false,
    };
  },
  created() {
    this.loading = true;

    fetchUser(this.$route.params.id)
      .then((result) => {
        this.user = result;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<style scoped>
img {
  height: 150px;
  width: 150px;
  margin-top: 20px;
  margin-left: 20px;
  display: inline-block;
}

div[class="user-data"] {
  display: inline-block;
  font-size: 20px;
  vertical-align: middle;
  padding-bottom: 20px;
  margin-left: 40px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: rgb(35, 44, 70);
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
  cursor: pointer;
}
</style>
