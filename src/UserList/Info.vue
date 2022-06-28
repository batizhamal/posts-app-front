<template>
  <div>
    <div class="sub-nav-bar"><h2>Info</h2></div>
    <div class="user-info">
      <img src="./../../assets/default-avatar.png" />
      <div class="user-data">
        <p>Id: {{ $route.query.id }}</p>
        <p>Name: {{ $route.query.name }}</p>
        <p>Age: {{ $route.query.age }}</p>
      </div>
    </div>

    <button @click="$router.go(-1)">Go back</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  height: 150px;
  widthl: 150px;
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
}
</style>
