<template>
  <div>
    <DeletePopup></DeletePopup>
    <router-view></router-view>
  </div>
</template>

<script>
import DeletePopup from "@/components/DeletePopup";

export default {
  name: "App",
  components: {
    DeletePopup,
  },
};
</script>

<style>
div {
  font-family: sans-serif;
  margin: 0 0;
}
</style>
