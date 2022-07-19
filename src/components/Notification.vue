<template>
  <div>
    <div class="notification">
      <div>
        <p class="notification__title">{{ title }}</p>
        <p class="notification__text">{{ text }}</p>
      </div>
      <UIButton
        class="notification__button"
        :color="warn ? 'red' : 'blue'"
        title="X"
        @click="$emit('close')"
      ></UIButton>
    </div>
  </div>
</template>

<script>
import UIButton from "@/ui/UIButton.vue";
export default {
  components: { UIButton },
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    warn: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  z-index: 32;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  height: 60px;
  width: 300px;
  max-height: 90%;
  max-width: 90%;
  background-color: white;
  border-radius: 0.2rem;
  overflow: hidden;
  border: 1px solid #b1b1b1;
  box-shadow: 0px 0px 5px rgba(138, 123, 123, 0.3);
  align-items: center;
  justify-content: center;
}
.notification__button {
  position: absolute;
  top: 0;
  right: 0;
  width: 10%;
  height: 100%;
  border-radius: 0;
  margin: 0;
}
.notification__text,
.notification__title {
  font-size: 0.8rem;
  margin: 5px 10px;
}
.notification__title {
  font-weight: bold;
}
</style>
