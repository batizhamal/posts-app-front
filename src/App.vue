<template>
  <div>
    <DeletePostPopup></DeletePostPopup>
    <ModeratePostPopup></ModeratePostPopup>
    <Notification
      v-show="showNotification"
      v-bind="notificationProps"
      @close="showNotification = false"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import Notification from "./components/Notification.vue";
import DeletePostPopup from "./views/Posts/popups/DeletePostPopup";
import ModeratePostPopup from "./views/Posts/popups/ModeratePostPopup.vue";

export default {
  name: "App",
  components: {
    DeletePostPopup,
    ModeratePostPopup,
    Notification,
  },
  data: () => {
    return {
      showNotification: false,
      notificationProps: null,
    };
  },
  created() {
    Vue.prototype.$notify = (params) => {
      this.showNotification = true;
      this.notificationProps = params;
      setTimeout(() => {
        this.showNotification = false;
        this.notificationProps = null;
      }, 15000);
    };
  },
};
</script>

<style>
div {
  font-family: sans-serif;
  margin: 0 0;
}
</style>
