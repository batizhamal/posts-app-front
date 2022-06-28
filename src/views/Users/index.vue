<template>
  <div>
    <div class="nav-bar"><h1>User Info App</h1></div>

    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  background: rgb(35, 44, 70);
  color: rgb(255, 255, 255);
  height: 60px;
  width: 100%;
  text-align: center;
  display: table;
  margin: 0 auto;
}

h1 {
  text-align: center;
  vertical-align: middle;
  display: table-cell;
}
</style>

<style>
div {
  font-family: sans-serif;
}
</style>
