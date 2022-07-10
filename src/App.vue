<template>
  <div>
    <AppDeletePopup></AppDeletePopup>
    <router-view></router-view>
  </div>
</template>

<script>
import AppDeletePopup from "@/ui/AppDeletePopup.vue";

export default {
  name: "App",
  components: {
    AppDeletePopup,
  },
};
</script>

<style>
div {
  font-family: sans-serif;
  margin: 0 0;
}
</style>
