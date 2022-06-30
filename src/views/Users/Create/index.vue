<template>
  <div>
    <div class="sub-nav-bar"><h2>Create New User</h2></div>
    <p>Please fill out this form with the required information</p>
    <form>
      <label
        >Enter User's Name: <input type="text" v-model="name" name="name"
      /></label>
      <label
        >Enter User's Age: <input type="number" v-model="age" name="age"
      /></label>
      <label>
        <input type="checkbox" required name="terms" /> I accept the
        <a href="https://pbs.twimg.com/media/FCSlOmEWEAEWmu3.jpg"
          >terms and conditions</a
        ></label
      >
      <button @click="saveUser">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: null,
    };
  },
  methods: {
    saveUser() {
      this.$store.commit("addUser", { name: this.name, age: this.age });
      this.$router.push("/list");
    },
  },
};
</script>

<style>
label {
  display: block;
}
</style>
