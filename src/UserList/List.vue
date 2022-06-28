<template>
  <div>
    <div class="sub-nav-bar"><h2>List</h2></div>

    <ul>
      <li is="User" v-for="user in users" :key="user.id" :user="user"></li>
    </ul>
  </div>
</template>

<script>
import User from "./User.vue";

export default {
  components: {
    User,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "John",
          age: 20,
        },
        {
          id: 2,
          name: "Alex",
          age: 23,
        },
        {
          id: 3,
          name: "Bati",
          age: 19,
        },
        {
          id: 4,
          name: "Sam",
          age: 22,
        },
        {
          id: 5,
          name: "Bob",
          age: 25,
        },
      ],
    };
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
