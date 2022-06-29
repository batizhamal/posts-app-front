<template>
  <div>
    <div class="sub-nav-bar"><h2>List</h2></div>
    <div>
      <AppSpinner v-if="loading"></AppSpinner>
      <User
        v-for="user in users"
        :key="user.id"
        :user="user"
        @deleteUser="deleteUser"
      />
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
</style>
