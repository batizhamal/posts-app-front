<template>
  <div>
    <div class="sub-nav-bar"><h2>List</h2></div>
    <AppSpinner v-if="loading"></AppSpinner>
    <div v-else>
      <Card
        v-for="user in $store.state.users"
        :key="user.id"
        :user="user"
        @deleteUser="deleteUser"
      />
      <button @click="$router.push({ name: 'create' })" class="create">
        Create
      </button>
    </div>
  </div>
</template>

<script>
import { fetchUsers } from "@/api";
import Card from "./block/Card";
import AppSpinner from "@/components/ui/AppSpinner.vue";

export default {
  components: {
    Card,
    AppSpinner,
  },
  data() {
    return {
      loading: false,
    };
  },
  created() {
    // this.loading = true;
    // fetchUsers()
    //   .then((result) => {
    //     this.users = result;
    //   })
    //   .finally(() => {
    //     this.loading = false;
    //   });
  },
  methods: {
    deleteUser(id) {
      // this.users.splice(
      //   this.users.findIndex((user) => user.id == id),
      //   1
      // );
      this.$store.commit("deleteUser", id);
    },
  },
};
</script>

<style>
.sub-nav-bar {
  background: rgb(170, 170, 170);
  color: rgb(35, 44, 70);
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
.create {
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
