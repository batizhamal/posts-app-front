<template>
  <div>
    <div class="sub-nav-bar"><h2>List</h2></div>
    <div>
      <AppSpinner v-if="loading"></AppSpinner>
      <ul>
        <User v-for="user in users" :key="user.id" :user="user" />
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchUsers } from "@/api";
import User from "./block/Card";
import AppSpinner from "@/components/ui/AppSpinner.vue";

export default {
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
  // data() {
  //   return {
  //     users: [
  //       {
  //         id: 1,
  //         name: "John",
  //         age: 20,
  //       },
  //       {
  //         id: 2,
  //         name: "Alex",
  //         age: 23,
  //       },
  //       {
  //         id: 3,
  //         name: "Bati",
  //         age: 19,
  //       },
  //       {
  //         id: 4,
  //         name: "Sam",
  //         age: 22,
  //       },
  //       {
  //         id: 5,
  //         name: "Bob",
  //         age: 25,
  //       },
  //     ],
  //   };
  // },
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
