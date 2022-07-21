<template>
  <div>
    <div class="notification">
      <div class="notification__content">
        <p :class="titleClass">{{ title }}</p>
        <p class="notification__text">{{ text }}</p>
      </div>
      <UIButton
        class="notification__button"
        :color="warn ? 'red' : 'blue'"
        size="square"
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
  computed: {
    titleClass() {
      return {
        notification__title: true,
        notification__title_red: this.warn,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  $self: &;

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

  &__button {
    position: absolute;
    top: 0;
    right: 0;
    width: 10%;
    height: 100%;
    border-radius: 0;
    margin: 0;
  }

  &__content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &__text,
  &__title {
    font-size: 0.8rem;
    margin: 5px 10px;
  }

  &__title {
    font-weight: bold;

    &_red {
      color: rgb(149, 0, 0);
    }
  }
}
</style>
