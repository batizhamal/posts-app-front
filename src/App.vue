<template>
  <div>
    <DeletePostPopup></DeletePostPopup>
    <ModeratePostPopup></ModeratePostPopup>
    <router-view></router-view>
  </div>
</template>

<script>
import DeletePostPopup from "./views/Posts/popups/DeletePostPopup";
import ModeratePostPopup from "./views/Posts/popups/ModeratePostPopup.vue";

export default {
  name: "App",
  components: {
    DeletePostPopup,
    ModeratePostPopup,
  },
};
</script>

<style>
div {
  font-family: sans-serif;
  margin: 0 0;
}
</style>
