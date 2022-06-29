<template>
  <div>
    <div class="sub-nav-bar"><h2>List</h2></div>
    <AppSpinner v-if="loading"></AppSpinner>
    <div v-else>
      <User
        v-for="user in users"
        :key="user.id"
        :user="user"
        @deleteUser="deleteUser"
      />
      <button @click="$router.push({ name: 'create' })" class="add">Add</button>
    </div>
  </div>
</template>

<script>
import { fetchUsers } from "@/api";
import User from "./block/Card";
import AppSpinner from "@/components/ui/AppSpinner.vue";

export default {
  components: {
    User,
    AppSpinner,
  },
  data() {
    return {
      users: [],
      loading: false,
    };
  },
  created() {
    this.loading = true;

    fetchUsers()
      .then((result) => {
        this.users = result;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    deleteUser(id) {
      this.users.splice(
        this.users.findIndex((user) => user.id == id),
        1
      );
    },
  },
};
</script>

<style>
.sub-nav-bar {
  background: rgb(170, 170, 170);
  color: rgb(255, 255, 255);
  height: 29px;
  width: 100%;
  text-align: center;
  margin-top: -6px;
  margin-left: auto;
  margin-right: auto;
}
h2 {
  margin-top: 6px;
}
.add {
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
